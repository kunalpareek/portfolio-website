document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('terminal-input');
    const output = document.querySelector('.output');
    printOutput("Welcome to Kunal Pareek's terminal!");
    printOutput('Available commands: help, about, blog, contact, resume, skills, close');

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            processCommand(input.value);
            input.value = '';
        }
    });

    function processCommand(command) {
        const outputLine = document.createElement('div');
        outputLine.textContent = `visitor@portfolio:~$ ${command}`;
        output.appendChild(outputLine);

        switch (command) {
            case 'help':
                printOutput('Available commands: help, about, blog, contact, resume, skills, close');
                break;
            case 'about':
                printOutput('Name: Kunal Pareek');
                printOutput('Bio: Experienced in developing robust and highly scalable products with microservices architecture. Proven leadership skills, excellent problem-solving ability, and a strong aptitude for Node Js, Golang, MongoDB, MySQL, Cloud (AWS, GCP), etc. Experienced in leading cross-functional initiatives, and project and team management.');
                break;
            case 'blog':
                printOutput('My blog is available at <a href="https://blog.kunalpareek.com" target="_blank">https://blog.kunalpareek.com</a>');
                printOutput('Redirecting you...', command);
                printOutput('Click <a href="https://blog.kunalpareek.com" target="_blank" style="text-decoration:underline;">here<a> if redirect does not work.')
                break;
            case 'contact':
                printOutput('Phone: +91 98001 91333');
                printOutput('Email: kunalpareek01@gmail.com');
                printOutput('LinkedIn: <a href="https://www.linkedin.com/in/kunalpareek" target="_blank">https://www.linkedin.com/in/kunalpareek</a>')
                printOutput('Github: <a href="https://github.com/kunalpareek" target="_blank">https://github.com/kunalpareek</a>')
                printOutput('Blog: <a href="https://blog.kunalpareek.com" target="_blank">https://blog.kunalpareek.com</a>')
                break;
            case 'close':
                printOutput('Terminating...', command);
                break;
            case 'resume': 
                printOutput('Loading...', command);
                break;
            case 'skills':
                printOutput('Backend: <b>Node JS, Golang, Python</b>');
                printOutput('Web: <b>HTML, CSS, JavaScript, TypeScript, Angular</b>');
                printOutput('Databases: <b>MongoDB, MySQL, Firebase, BigQuery, DynamoDB</b>');
                printOutput('Cloud: <b>AWS, GCP, Docker, Kubernetes, DevOps</b>');
                printOutput('Miscellaneous: <b>Redis, Kafka, RabbitMQ, SSO Auth, Microservices, Problem-solving, Websockets, AWS Lambda, SQS, GCP Cloud functions, PubSub, AppEngine</b>');
                printOutput('Management: <b>Team, Project, Stakeholder, and SLA Management, Release & Delivery planning</b>');
                break;
            default:
                printOutput(`Command not found: ${command}`);
        }
    }

    async function printOutput(text, command) {
        const outputLine = document.createElement('div');
        outputLine.innerHTML = text;
        output.appendChild(outputLine);
        // output.scrollTop = output.scrollHeight;
        document.getElementById("inputLine").scrollIntoView();
        if (command === 'close') {
            const element = document.getElementById('inputLine');
            element.classList.add('hidden');
            await sleep(2000);
            window.location.href = './index.html';
        }
        if (command === 'blog') {
            const element = document.getElementById('inputLine');
            element.classList.add('hidden');
            await sleep(1000);
            await sleep(1000);
            await sleep(1000);
            window.open('https://blog.kunalpareek.com', '_blank').focus(); 
            element.classList.remove('hidden');
        }
        if (command === 'resume') {
            await sleep(1000);
            window.open('./resume.pdf', '_blank').focus(); 
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      }
});
