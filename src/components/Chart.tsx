import ReactApexChart from "react-apexcharts";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const timeFrames = ["Last 8 days", "Last month", "Last year"];

const ITEM_HEIGHT = 48;

export const Chart = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Sales");
  const dropdownItems = ["Sales", "Revenue", "Profit"];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [timeFrame, setTimeFrame] = useState(timeFrames[0]);

  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false, // This hides the entire toolbar, including the export menu
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        borderRadius: 7,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "Sept 10",
        "Sept 11",
        "Sept 12",
        "Sept 13",
        "Sept 14",
        "Sept 15",
        "Sept 16",
        "Sept 17",
        "Sept 18",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (val: string) => {
          return val + "k";
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      colors: ["#eef0fa"],
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: string) {
          return val + " K";
        },
      },
    },
  });

  const [series] = useState([
    {
      name: "Sales",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
  ]);
  const handleTimeFrameClick = (event: React.MouseEvent<HTMLElement>) => {
    setTimeFrame(event.currentTarget.textContent as string); // Update time frame
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="text-lg font-medium tracking-tight leading-6 truncate">
            Summary
          </div>
          <div className="relative ">
            <button
              className="px-2 py-2 rounded-lg w-28 text-[#d23766] font-semibold flex justify-around items-center bg-[#fceff3] tracking-tight leading-6 truncate"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedItem} <KeyboardArrowDownIcon />
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 w-24 mt-1 bg-white shadow-lg rounded-lg">
                {dropdownItems.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedItem(item);
                      setDropdownOpen(false);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="ml-2 -mt-2 -mr-3">
          <span className="font-medium">{timeFrame}</span>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {timeFrames.map((option) => (
              <MenuItem
                key={option}
                selected={option === timeFrame}
                onClick={handleTimeFrameClick}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>

      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    </>
  );
};
