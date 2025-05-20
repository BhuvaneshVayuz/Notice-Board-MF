import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NoticeBoardListing from "./pages/forum/noticeBoard/listing";
import NoticeBoardCreateEdit from "./pages/forum/noticeBoard/createEdit";
import BasicNoticeDetail from "./pages/forum/noticeBoard/createEdit/basicNoticeDetail";
import NoticeContent from "./pages/forum/noticeBoard/createEdit/noticeContent";
import NotificationsAndPermissions from "./pages/forum/noticeBoard/createEdit/notificationsAndPermissions";
import NoticeBoardPreview from "./pages/forum/noticeBoard/createEdit/preview";
import NoticeBoardDetail from "./pages/forum/noticeBoard/detail";
import ReplyOnNotice from "./pages/forum/noticeBoard/replyOnNotice";
import TemplateListing from "./pages/forum/noticeBoard/templateListing";
import AddTemplate from "./pages/forum/noticeBoard/addTemplate";
import { ContextProvider } from "./context/context";

const App = () => {
  let MicrofrontendLoader = window.MicrofrontendLoader;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NoticeBoardListing />,
      index: true,
    },
    {
      path: "sing",
      element: (
        <>
          <MicrofrontendLoader
            scriptUrl={"http://localhost:3003/reusableTable-bundle.js"}
            mountDivId="reusableTable"
            globalVarName="reusableTable"
          />
        </>
      ),
    },
    {
      index: true,
      element: <NoticeBoardListing />,
    },
    {
      path: "listing",
      element: <NoticeBoardListing />,
    },

    {
      path: "create",
      element: <NoticeBoardCreateEdit />,
      children: [
        {
          index: true,
          element: <BasicNoticeDetail />,
        },
        {
          path: "notice-content",
          element: <NoticeContent />,
        },
        {
          path: "notifications-and-permissions",
          element: <NotificationsAndPermissions />,
        },
      ],
    },
    {
      path: "preview",
      element: <NoticeBoardPreview />,
    },
    {
      path: "detail",
      element: <NoticeBoardDetail />,
    },
    {
      path: "reply-on-notice",
      element: <ReplyOnNotice />,
    },
    {
      path: "edit-expiry-date",
      element: <NoticeBoardDetail />,
    },
    {
      path: "templates",
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <TemplateListing />,
        },
        {
          path: "create",
          element: <AddTemplate />,
        },
      ],
    },
  ]);

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
};

export default App;
