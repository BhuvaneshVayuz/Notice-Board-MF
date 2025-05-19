import { BreadCrumbCustom } from "../../../../components/ui/breadCrumb";
import { PageHeaderWrapper } from "../../../../components/ui/wrapper/pageHeader";
import { NoticeCard } from "./noticeCard";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { NoticeHeader } from "./noticeHeader";
import { useContext, useEffect, useMemo, useRef } from "react";
import MicrofrontendLoader from "../../../components/ui/MFloader/MicroFrontendLoader";
import { context } from "../../../context/context";

const dummyData = Array.from({ length: 10 }, (_, i) => ({
  title: `Unapproved Renovation Activity – Immediate Attention`,
  date: `12-May-2025`,
  image: "/anacity.svg",
  description: `We noticed that civil renovation work is being carried out in your flat without prior written permission from the society...`,
  attachments: ["Confluence.png", "Confluence.png", "Confluence.png"],
  emailNotifications: false,
  expiryDate: `18-May-2025`,
  visibility: "All Owners",
  approvedBy: "Sanjay",
  postedBy: "Rishabh Aggarwal",
  approvedOn: "12-May-2025",
}));

export default function NoticeBoardListing() {
  const { loading, getUsers } = useContext(context);
  console.log(loading, "loading");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  console.log("searchParams", searchParams);

  const tableRef = useRef(null);

  useEffect(() => {
    getUsers();
  }, []);

  const staticProps = useMemo(
    () => ({
      navigate,
      searchParams,
      setSearchParams,
    }),
    [navigate, searchParams, setSearchParams]
  );

  useEffect(() => {
    if (tableRef.current?.updateProps) {
      tableRef.current.updateProps(staticProps); // ✅ sending plain functions
    }
  }, [staticProps]);

  return (
    <>
      <PageHeaderWrapper>
        <BreadCrumbCustom
          links={[
            { label: "Home", to: "/" },
            { label: "Forum", to: "/forum" },
          ]}
          pageTitle="Noticeboard"
        />
        <Box className="flex gap-2">
          <Button
            LinkComponent={RouterLink}
            to={"templates"}
            variant="outlined"
          >
            Manage Templates
          </Button>
          <Button LinkComponent={RouterLink} to="create" variant="contained">
            Post New Notice
          </Button>
        </Box>
      </PageHeaderWrapper>
      <NoticeHeader />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyData.map((item, idx) => (
          <NoticeCard key={idx} data={item} />
        ))}
      </div>
    </>
  );
}
