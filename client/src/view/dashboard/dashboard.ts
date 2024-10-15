import './dashboard.scss'
export function renderDashboard(): string
{
    try {
        return `
        <div id="container">
            <div id="topContainer">
                <div>
                    <div id="lastLesson">
                        <h1>Lesson</h1>
                    </div>
                    <div id="grades">
                        <h1>Grades</h1>
                    </div>
                    <div id="attendence">
                        <h1>Attendence</h1>
                    </div>
                </div> 
                <div id="calendar">
                    <h1>Calendar</h1>
                </div>
            </div>
            <div id="messages">
                <h1>Messages</h1>
            </div>
        </div>
        `
} catch (error) {
    console.error(error);
    return "";
    
}
}