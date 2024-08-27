document.addEventListener('DOMContentLoaded', function() {
    const timelineElements = window.timelineElements;
    const container = document.getElementById('timeline-container');

    // Generate HTML for each timeline element
    timelineElements.forEach((element, index) => {
        const isLastElement = index === timelineElements.length - 1;
        // Use a unique class name for each timeline entry
        const className = `timeline-dot-${element.key}`;
        const style = `--dot-image: url('${element.image}');`; // CSS variable for the image

        const elementHtml = `
            <div class="timeouter${isLastElement ? ' last-element' : ''}">
                <div class="timecard">
                    <div class="timeinfo">
                        <h3 class="timetitle ${className}" style="${style}">${element.timetitle}</h3>
                        <h4 class="timesubtitle">${element.timesubtitle}</h4>
                        <p class="timedate">${element.timedate}</p>
                        <p class="timetext">${element.timetext}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += elementHtml;
    });
});
