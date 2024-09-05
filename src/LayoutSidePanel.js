import React, { useState, useMemo } from 'react';
import './LayoutComponent.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { FaBuilding, FaTag, FaUser, FaMapMarked, FaSearch, FaFilter, FaSort, FaLayerGroup } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';
import { IoMdMore } from "react-icons/io";
import { FcCancel } from "react-icons/fc";

const SidePanel = () => {
  const iconSources = ['images/translate-2.svg', 'images/setting-2.svg', 'images/Bulb.svg', 'images/logout.svg']; // Replace with actual paths

  return (
    <div className="main-container">
      <div className="left-panel">
        <img src="images/Company Logo.svg" alt="Company Logo" className="company-logo" />
        <div className="icon-panel">
          {iconSources.map((src, index) => (
            <button key={index} className="icon-button">
              <img src={src} alt={`Icon ${index + 1}`} className="icon" />
            </button>
            
          ))}
        </div>
        <img src="images/User.png" alt="Small Image" className="small-image" />
      </div>

      <div className="content-container">
        <TopPanel />
        <ProjectPanel />
        <SearchPanel /> {/* Added the SearchPanel here */}
        <div className="table-container">
          <ProjectTable />
        </div>
      </div>
    </div>
  );
};

const TopPanel = () => {
  return (
    <div className="top-panel">
      <div className="top-panel-buttons">
        <button className="top-panel-button map-button">
          <img src='images/setting-2.svg' className="button-icon" />
          <span>Maps</span>
        </button>
        <button className="top-panel-button settings-button">
          <img src='images/setting-2.svg' className="button-icon" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

const ProjectPanel = () => {
  const projectName = "Urban Space Projects"; // Placeholder for dynamic data
  const projectCount = 24; // Placeholder for dynamic data

  return (
    <div className="project-panel">
      <div className="project-logo-container">
        <div className="project-logo-box">
          <img src="images/Urban Space.png" alt="Project Logo" className="project-logo" />
        </div>
        <div className="project-text">
          <div className="project-title">{projectName}</div>
          <div className="project-count">{projectCount} Projects</div>
        </div>
      </div>
    </div>
  );
};

const SearchPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Implement search logic here
  };

  return (
    <div className="search-panel">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <button className="button group-button">
        <img src='images/Group.svg' className="button-icon" />
        Group
      </button>
      <button className="button filter-button">
        <img src='images/Filter.svg' className="button-icon" />
        Filter
      </button>
      <button className="button sort-button">
        <img src='images/Sort.svg' className="button-icon" />
        Sort
      </button>
      <button className="button more-button">
        <img src='images/More.svg' />
      </button>
    </div>
  );
};

const ProjectTable = () => {
  const [rowData] = useState([
    {
      project: "Anant University",
      status: "Active",
      projectImage: "images/Preview.png",
      location: "Ahmedabad, Gujarat",
      icon: "images/Company-Logo(Project).png",
      progress: 80,
      category: "Energy & Industrial",
      tags: ["Tag 01", "Tag 02", "Tag 03", "Tag 04"],
      users: ["User 1", "User 2", "User 3"],
      indicators: { ppc: 56, stopped: 56, active: 56 },
      energy: "images/water-flash-fill.svg",
      industry: "images/building-3-fill.svg"
    },
    {
      project: "NMHC Lothal Museum",
      status: "Mobile Only",
      projectImage: "images/Preview.png",
      location: "Gujarat",
      icon: "images/Company-Logo(Project).png",
      progress: 30,
      category: "Energy & Industrial",
      tags: ["Tag 01", "Tag 03"],
      users: ["User 1", "User 2"],
      indicators: { ppc: 56, constraints: 56, timeSensitive: 24 },
      energy: "images/water-flash-fill.svg",
      industry: "images/building-3-fill.svg"
    }
  ]);

  const getRowHeight = (params) => {
    return 80; // Fixed height for each row
  };

  const columnDefs = useMemo(() => [
    {
      headerName: "Projects",
      field: "project",
      flex: 8,
      cellRenderer: (params) => (
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          {/* Index Number */}
          <div style={{ fontSize: '13px', marginRight: '8px' }}>
            {params.node.rowIndex + 1}
          </div>

          {/* Main Image Container */}
          <div style={{
            width: '88px',
            height: '56px',
            margin: '0 8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #ccc'
          }}>
            <img src={params.data.projectImage} alt="Project Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Project Name and Status-Location */}
          <div style={{ marginLeft: '20px', flex: 1, marginTop: '22px', marginBottom: '22px', lineHeight: '20px' }}>
            <div style={{ fontSize: '13px', marginTop: '50px', marginBottom: '0px' }}>{params.value}</div>
            <div style={{ fontSize: '12px', marginBottom: '50px', color: params.data.status === "Active" ? '#0E8BDF' : 'grey' }}>
              {params.data.status} - {params.data.location}
            </div>
          </div>

          {/* Secondary Image Container */}
          <div style={{
            width: '32px',
            height: '32px',
            marginLeft: 'auto',
            marginRight: '303px',  // Adjust to keep it 303px away from the right edge of the main image
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: '50%',
            border: '1px solid #ccc',
            overflow: 'hidden'
          }}>
            <img src={params.data.icon} alt="Progress Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      ),
    },
    {
      headerName: "Progress",
      field: "progress",
      width: 150,
      flex: 1,
      cellRenderer: (params) => (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <div style={{ width: '100%' }}>
          <div style={{ backgroundColor: '#e0e0e0', height: '6px', borderRadius: '4px' }}>
            <div style={{
              width: `${params.value}%`,
              backgroundColor: params.value > 50 ? 'green' : 'red',
              height: '100%',
              borderRadius: '4px'
            }}></div>
          </div>
        </div>
        <div style={{ marginLeft: '8px', fontSize: '12px', color: 'black' }}>
          {params.value}%
        </div>
      </div>
      ),
    },
    {
      headerName: "Category",
      field: "category",
      width: 150,
      flex: 1.5,
      cellRenderer: (params) => (
        <span style={{
          display: 'flex',
          backgroundColor: params.value === 'Energy & Industrial' ? 'rgba(27, 146, 71, 0.10)' : '#EE8B16',
          color: '#1B9247',
          padding: '6px 10px 6px 6px',
          borderRadius: '48px',
          width: '152px',
          height: '32px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '15px'
        }}>
          <img src= {params.value === 'Energy & Industrial' ? params.data.energy : params.data.industry} className='category-icon'/>
          {params.value}
        </span>
      ),
    },
    {
      headerName: "Tags",
      field: "tags",
      width: 150,
      flex: 3,
      cellRenderer: (params) => {
        const maxTagsToShow = 3;
        const tags = params.value.slice(0, maxTagsToShow);
        const extraTagsCount = params.value.length - maxTagsToShow;

        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {tags.map((tag, index) => (
              <span key={index} style={{
                width: '42px', // Set width to 40px
                height: '9px', // Set height to 9px
                border: '1px solid var(--Neutrals-2, #D6DDE2)',
                borderRadius: '48px',
                background: '#EBEEF0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 10px', // Set padding
                fontSize: '13px', // Adjust font size
                marginTop: '23.5px'
              }}>
                {tag}
              </span>
            ))}
            {extraTagsCount > 0 && (
              <span style={{
                width: '42px', // Set width to 40px
                height: '9px', // Set height to 9px
                backgroundColor: '#EBEEF0',
                borderRadius: '48px',
                border: '1px solid var(--Neutrals-2, #D6DDE2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 10px', // Set padding
                fontSize: '10px', // Adjust font size
                marginTop: '23.5px'
              }}>
                +{extraTagsCount}
              </span>
            )}
          </div>
        );
      }
    },
    {
      headerName: "Users",
      field: "users",
      flex: 1, // Relative width
      cellRenderer: (params) => {
        const users = params.value || []; // Assuming users is an array of user objects with `avatar` property
        const totalUsers = users.length;
    
        return (
          <div style={{
            width: '75px',
            height: '20px',
            padding: '6px',
            border: '1px solid var(--Neutrals-2, #D6DDE2)',
            borderRadius: '8px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f9f9f9',
            overflow: 'hidden',
            marginTop: '20px'
          }}>
            {/* Image Container 1 */}
            {totalUsers > 0 && (
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '40px',
                border: '2px solid white',
                backgroundColor: '#ccc',
                position: 'absolute',
                top: '4px',
                left: '6px',
                zIndex: 3,
                backgroundImage: `url(${users[0].avatar})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
            )}
            {/* Image Container 2 */}
            {totalUsers > 1 && (
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '40px',
                border: '2px solid white',
                backgroundColor: '#ccc',
                position: 'absolute',
                top: '4px',
                left: '18px', // -8px from the first container
                zIndex: 2,
                backgroundImage: `url(${users[1].avatar})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
            )}
            {/* Image Container 3 */}
            {totalUsers > 2 && (
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '40px',
                border: '2px solid white',
                backgroundColor: '#ccc',
                position: 'absolute',
                top: '4px',
                left: '30px', // -8px from the second container
                zIndex: 1,
                backgroundImage: `url(${users[2].avatar})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
            )}
            {/* User Count */}
            {totalUsers > 0 && (
              <div style={{
                fontSize: '13px',
                color: '#475057',
                position: 'absolute',
                right: '20px',
                top: '4px',
                bottom: '6px',
                display: 'flex',
                alignItems: 'center',
              }}>
                {totalUsers}
              </div>
            )}
          </div>
        );
      },
    },    
    {
      headerName: "Indicators",
      field: "indicators",
      flex: 5, // Relative width
      cellRenderer: (params) => {
        const indicators = params.value || {};

        // Mapping of indicators to React icons
        const indicatorIcons = {
          stopped: FcCancel,
          constraints: () => <img src='/images/Constraint.svg' alt="Constraints" />,
          active: () => <img src='images/x-octagon.svg' alt="Active" />,
          timeSensitive: () => <img src= "/images/Vector.svg" alt="Time Sensitive" />,
        };

        return (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%', // Ensure the tags are centered vertically
            gap: '8px', // 8px space between tags
          }}>
            {/* PPC Tag */}
            {indicators.ppc !== undefined && (
              <div style={{
                width: '63px',
                height: '20px',
                padding: '6px 10px', // 6px horizontal, 10px vertical padding
                border: '1px solid #D6DDE2',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{
                  color: '#475057',
                  fontFamily: 'Inter',
                  fontSize: '13px',
                  fontWeight: 500,
                  lineHeight: '24px',
                }}>
                  PPC
                </span>
                <span style={{
                  color: '#0E8BDF',
                  fontFamily: 'Inter',
                  fontSize: '13px',
                  fontWeight: 500,
                  lineHeight: '24px',
                }}>
                  {indicators.ppc}%
                </span>
              </div>
            )}

            {/* Other Indicators */}
            {Object.keys(indicators).map((key) => {
              if (key === 'ppc') return null; // Skip PPC as it's already handled

              const Icon = indicatorIcons[key] || null;

              return (
                <div key={key} style={{
                  width: '43px',
                  height: '20px',
                  padding: '6px 10px 6px 6px', // 6px on top, bottom, left; 10px on right
                  border: '1px solid #D6DDE2',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  {Icon && <Icon style={{ width: '20px', height: '20px', marginRight: '6px' }} />}
                  <span style={{
                    color: '#475057',
                    fontFamily: 'Inter',
                    fontSize: '13px',
                    fontWeight: 500,
                    lineHeight: '24px',
                  }}>
                    {indicators[key]}
                  </span>
                </div>
              );
            })}
          </div>
        );
      },
    }

  ], []);

  return (
    <div className="ag-theme-alpine" style={{ height: '100%', width: '200%', overflow: 'auto', overscrollBehavior: '-moz-initial' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        getRowHeight={getRowHeight}
        defaultColDef={{
          flex: 1, // Default flex value for all columns
          minWidth: 100, // Minimum width for all columns
          resizable: true
        }}
        enableColResize={ true }
      />
    </div>
  );
};

export default SidePanel;
