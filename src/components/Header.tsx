import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { Badge, Breadcrumb } from "antd";
import { HomeFilled } from "@ant-design/icons";
export const HeaderComponent = () => {
  const notificationCount = 1;

  return (
    <>
      <div className="p-4 flex fkex-row justify-between items-center w-full ">
        <div className="">
          <h1 className="font-bold text-2xl">Dashboard</h1>
        </div>
        <div className="flex flex-row items-center justify-around gap-8">
          <div className="notification  mr-3">
            <Badge count={notificationCount} size="small" offset={[4, -5]}>
              <NotificationsSharpIcon
                style={{ color: "rgba(210, 53, 101, 1)" }}
              />
            </Badge>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col justify-end items-end mr-3">
              <span className="text-sm font-semibold ">Anima Agrawal</span>
              <span className="text-xs font-medium">Company LLC</span>
            </div>
            <div className="wing-icon">
              <img src="src\assets\wing.png" alt="wings" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-x-0">
        <Breadcrumb className="px-4 pt-2 pb-2">
          <Breadcrumb.Item>
            <HomeFilled
              style={{ color: "rgba(210, 53, 101, 1)", fontSize: 17 }}
            />
          </Breadcrumb.Item>
          <Breadcrumb.Item>page 1</Breadcrumb.Item>
          <Breadcrumb.Item>page 2</Breadcrumb.Item>
          <Breadcrumb.Item>page 3</Breadcrumb.Item>
          <Breadcrumb.Item>page 4</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  );
};
