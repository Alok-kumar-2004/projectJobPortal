document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('job-form');
    const jobListing = document.getElementById('job-listing');

    const jobs = [
        {
            title: 'Software Engineer',
            company: 'Tech Solutions',
            location: 'New York, NY',
            description: 'Responsible for developing and maintaining software applications.'
        },
        {
            title: 'Data Analyst',
            company: 'Data Corp',
            location: 'San Francisco, CA',
            description: 'Analyze and interpret complex data sets.'
        }
    ];

    const renderJobs = () => {
        jobListing.innerHTML = '';
        jobs.forEach((job, index) => {
            const jobElement = document.createElement('div');
            jobElement.className = 'job';
            jobElement.innerHTML = `
                <h3>${job.title}</h3>
                <p>Company: ${job.company}</p>
                <p>Location: ${job.location}</p>
                <p>Description: ${job.description}</p>
                <button onclick="alert('Applied to ${job.title} at ${job.company}')">Apply Now</button>
            `;
            jobListing.appendChild(jobElement);
        });
    };

    jobForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newJob = {
            title: event.target.title.value,
            company: event.target.company.value,
            location: event.target.location.value,
            description: event.target.description.value
        };
        jobs.push(newJob);
        renderJobs();
        jobForm.reset();
    });

    renderJobs();
});
