import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const MicrofrontendLoader = forwardRef(({ scriptUrl, cssUrl, mountDivId, globalVarName, propsToPass }, ref) => {
    const rootRef = useRef(null);
    const instanceRef = useRef(null);
    const containerRef = useRef(null);
    const linkRef = useRef(null);

    useEffect(() => {
        // Load CSS first (optional)
        if (cssUrl) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = cssUrl;
            link.type = 'text/css';
            linkRef.current = link;
            document.head.appendChild(link);
        }

        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const Component = window[globalVarName];
            if (Component && containerRef.current) {
                if (!rootRef.current) {
                    rootRef.current = window.ReactDOM.createRoot(containerRef.current);
                    instanceRef.current = {
                        props: propsToPass,
                        render: (newProps) => {
                            instanceRef.current.props = { ...instanceRef.current.props, ...newProps };
                            rootRef.current.render(window.React.createElement(Component, instanceRef.current.props));
                        },
                    };
                    instanceRef.current.render({});
                }
            }
        };

        return () => {
            if (rootRef.current) {
                rootRef.current.unmount();
                rootRef.current = null;
            }
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
            if (script.parentNode) {
                document.body.removeChild(script);
            }
            if (linkRef.current && linkRef.current.parentNode) {
                document.head.removeChild(linkRef.current);
            }
        };
    }, [scriptUrl, cssUrl, mountDivId, globalVarName]); // no rerun on props

    // Provide method to update props from outside
    useImperativeHandle(ref, () => ({
        updateProps: (newProps) => {
            if (instanceRef.current) {
                instanceRef.current.render(newProps);
            }
        }
    }));

    return <div id={mountDivId} ref={containerRef} />;
});

export default MicrofrontendLoader;
