import React, { useState, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { FaBuilding, FaTag, FaUser } from 'react-icons/fa'; // Import icons from React Icons

const ProjectTable = () => {
  const [rowData] = useState([
    {
      project: "Anant University",
      location: "Ahmedabad, Gujarat",
      icon: "starbucks",
      progress: 80,
      category: "Energy & Industrial",
      tags: ["Tag 01", "Tag 02", "Tag 03", "Tag 04"],
      users: ["User 1", "User 2", "User 3"],
      indicators: { indicator1: 56, indicator2: 56, indicator3: 56 }
    },
    {
      project: "NMHC Lothal Museum",
      location: "Gujarat",
      icon: "starbucks",
      progress: 30,
      category: "Energy & Industrial",
      tags: ["Tag 01", "Tag 03"],
      users: ["User 1", "User 2"],
      indicators: { indicator1: 56, indicator2: 56, indicator3: 24 }
    }
  ]);

  const getRowHeight = (params) => {
    return 60; // Fixed height for each row
  };

  const columnDefs = useMemo(() => [
    {
      headerName: "Projects",
      field: "project",
      width: 300, // Increased width for the Projects column
      cellRenderer: (params) => (
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          {params.data.icon === "starbucks" && (
            <FaBuilding style={{ width: 24, height: 24, marginRight: 40 }} />
          )}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 'bold', marginTop: 5 }}>{params.value}</div> 
            <div style={{ fontSize: '12px', color: 'gray', marginBottom: 5 }}>{params.data.location}</div>
          </div>
        </div>
      ),
    },
    {
      headerName: "Plan/Actual",
      field: "progress",
      width: 150, // Fixed width for the other columns
      cellRenderer: (params) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
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
      width: 150, // Fixed width for the other columns
      cellRenderer: (params) => (
        <span style={{
          backgroundColor: params.value === 'Energy & Industrial' ? 'green' : 'orange',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '4px'
        }}>
          {params.value}
        </span>
      ),
    },
    {
      headerName: "Tags",
      field: "tags",
      width: 150, // Fixed width for the Tags column
      cellRenderer: (params) => {
        const maxTagsToShow = 3; // Maximum tags to show
        const tags = params.value.slice(0, maxTagsToShow); // Show only the first 3 tags
        const extraTagsCount = params.value.length - maxTagsToShow; // Calculate the number of extra tags
    
        return (
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {tags.map((tag, index) => (
              <span key={index} style={{
                backgroundColor: '#f0f0f0',
                padding: '2px 6px',
                marginRight: '4px',
                marginTop: '2px',
                marginBottom: '2px',
                borderRadius: '4px',
                fontSize: '10px',
                display: 'inline-block'
              }}>
                <FaTag style={{ marginRight: '2px' }} />{tag}
              </span>
            ))}
            {extraTagsCount > 0 && (
              <span style={{
                backgroundColor: '#f0f0f0',
                padding: '2px 6px',
                marginRight: '4px',
                marginTop: '2px',
                marginBottom: '2px',
                borderRadius: '4px',
                fontSize: '10px',
                display: 'inline-block'
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
      width: 150, // Fixed width for the other columns
      cellRenderer: (params) => {
        const maxUsersToShow = 2;
        const users = params.value.slice(0, maxUsersToShow);
        const extraUsersCount = params.value.length - maxUsersToShow;
        return (
          <div>
            {users.map((user, index) => (
              <span key={index} style={{ display: 'inline-block', marginRight: '4px', alignItems: 'center' }}>
                <FaUser style={{ marginRight: '4px' }} />{user}
              </span>
            ))}
            {extraUsersCount > 0 && (
              <span style={{ display: 'inline-block', marginRight: '4px', alignItems: 'center' }}>
                +{extraUsersCount}
              </span>
            )}
          </div>
        );
      }
    },
    {
      headerName: "Indicators",
      field: "indicators",
      width: 150, // Fixed width for the other columns
      cellRenderer: (params) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>{params.value.indicator1}</span>
          {/* Add more indicators here */}
        </div>
      ),
    },
  ], []);

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        domLayout="autoHeight"
        getRowHeight={getRowHeight}
      />
    </div>
  );
}

export default ProjectTable;
