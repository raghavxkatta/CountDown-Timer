let startDate;
    let timerInterval;

    function updateTimer() {
        if (!startDate) return;

        const now = new Date().getTime();
        const difference = now - startDate;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML =
            `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
    }

    document.getElementById('setDate').addEventListener('click', function() {
        const inputDate = document.getElementById('startDate').value;
        if (inputDate) {
            startDate = new Date(inputDate).getTime();
            updateTimer();
            clearInterval(timerInterval);
            timerInterval = setInterval(updateTimer, 1000);
        } else {
            alert('Please select a valid date');
        }
    });

    document.getElementById('resetDate').addEventListener('click', function() {
        startDate = null;
        clearInterval(timerInterval);
        document.getElementById('startDate').value = '';
        document.getElementById('timer').innerHTML = '';
    });
    
