import { Routes, Route } from "react-router-dom";
import NoticeBoardListing from "./pages/noticeBoard/listing";
import NoticeBoardCreateEdit from "./pages/noticeBoard/createEdit";
import BasicNoticeDetail from "./pages/noticeBoard/createEdit/basicNoticeDetail";
import NoticeContent from "./pages/noticeBoard/createEdit/noticeContent";
import NotificationsAndPermissions from "./pages/noticeBoard/createEdit/notificationsAndPermissions";
import NoticeBoardPreview from "./pages/noticeBoard/createEdit/preview";
import NoticeBoardDetail from "./pages/noticeBoard/detail";
import { ContextProvider } from "./context/context";

const App = () => {
  let MicrofrontendLoader = window.MicrofrontendLoader;

  return (
    <ContextProvider>
      <Routes>
        <Route index element={<NoticeBoardListing />} />
        <Route
          path="sing"
          element={
            <>
              <MicrofrontendLoader
                // scriptUrl={"https://sing-in-mf.vercel.app/signin-bundle.js"}
                scriptUrl={"http://localhost:3003/reusableTable-bundle.js"}
                mountDivId="reusableTable"
                globalVarName="reusableTable"
              />
            </>
          }
        />
        <Route path="listing" element={<NoticeBoardListing />} />
        <Route path="create" element={<NoticeBoardCreateEdit />}>
          <Route index element={<BasicNoticeDetail />} />
          <Route path="notice-content" element={<NoticeContent />} />
          <Route
            path="notifications-and-permissions"
            element={<NotificationsAndPermissions />}
          />
        </Route>
        <Route path="preview" element={<NoticeBoardPreview />} />
        <Route path="detail" element={<NoticeBoardDetail />} />
      </Routes>
    </ContextProvider>
  );
};

export default App;
