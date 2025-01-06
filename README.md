# Calendar Communication Tracker

## Overview
The Calendar Communication Tracker is a React-based application designed to help organizations maintain strong professional relationships by efficiently tracking communications with companies. It provides a centralized platform to log past interactions, plan future communications, and manage engagement frequency. The application ensures follow-ups are timely and consistent.


## Features
- Admin Module
  1. Company Management
      Add, edit, and delete company details:
        Name
        Location
        LinkedIn Profile
        Emails
        Phone Numbers
        Comments/Notes
        Communication Periodicity (e.g., every 2 weeks)
   2. Communication Method Management
        Define available communication methods:
            Name (e.g., "LinkedIn Post")
            Description (e.g., "Visit company premises")
            Sequence for communication (e.g., LinkedIn Post → LinkedIn Message → Email → Phone Call)
            Mandatory flag to indicate required steps
            Default communication methods include:
            LinkedIn Post
            LinkedIn Message
            Email
            Phone Call
            Other

- User Module
  1. Dashboard
     Grid view showing:
          Company Name
          Last Five Communications (type and date)
          Next Scheduled Communication (type and date)
      Color-coded highlights:
          Red: Overdue communication
          Yellow: Communication due today
      Interactive Features:
          Hover to view communication notes/comments
          Log new communication via a modal with options:
            Type of communication
            Date of communication
            Notes
   2. Notifications
        Overdue Communications Grid: Displays companies with overdue actions
        Today's Communications Grid: Displays tasks due today
        Notification badge icon shows count of overdue and due communications  
    3. Calendar View
         Interactive calendar for:
            Viewing past communications
            Managing upcoming communications
          Visualizes:
            Dates and methods of previous interactions
            Scheduled dates and methods for future interactions
       
    Reporting and Analytics Module (Optional, not yet implemented)
    1. Communication Frequency Report
          Graphical representation of communication methods used over a selected time frame.
    2.Engagement Effectiveness Dashboard
          Metrics for the effectiveness of communication methods.
    3.Overdue Communication Trends
          Heatmap or trendline to analyze overdue communications.
    4.Real-Time Activity Log
        A live feed of all communication activities.

## Setup Instructions
1. Clone the repository.
git clone <repository-url>
cd <repository-folder>
3. Navigate to the project directory.
4. Run `npm install` to install dependencies.(npm install)
5. Run `npm start` to start the application.(npm start)

## Known Limitations
1.Reporting and Analytics Module: Not implemented in this version.
2.Authentication: User authentication is not included.

## Technologies Used
- React: For building the user interface
- CSS: For styling the application
- JavaScript: For implementing logic

## License
This project is licensed under the MIT License.

