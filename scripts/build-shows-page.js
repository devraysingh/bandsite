    const showTimes = [
        {
            date: "Mon Sept 06 2021",
            venue: "Ronald Lane",
            location: "San Francisco, CA"
        },
        {
            date: "Tue Sept 21 2021",
            venue: "Pier 3 East",
            location: "San Francisco, CA"
        },
        {
            date: "Fri Oct 15 2021",
            venue: "View Lounge",
            location: "San Francisco, CA"
        },
        {
            date: "Sat Nov 06 2021",
            venue: "Hyatt Agency",
            location: "San Francisco, CA"
        },
        {
            date: "Fri Nov 26 2021",
            venue: "Moscow Center",
            location: "San Francisco, CA"
        },
        {
            date: "Wed Dec 15 2021",
            venue: "Press Club",
            location: "San Francisco, CA"
        }
    ];
    


    const showsSchedule = document.querySelector(".shows__schedule");
    console.log(showsSchedule);

    showTimes.forEach((show) => {
        //Element Creation for Show Card 
        const showCard  = document.createElement("div");
        const dateLabel = document.createElement("p");
        const showDate = document.createElement("p");
        const venueLabel = document.createElement("p");
        const venueName = document.createElement("p");
        const locLabel = document.createElement("p");
        const locName = document.createElement("p");
        const button = document.createElement("button");
        const newSec =  document.createElement("hr");
  

        //data insertion
        dateLabel.innerText = "DATE";
        venueLabel.innerText = "VENUE";
        locLabel.innerText = "LOCATION";
        showDate.innerText = show.date;
        venueName.innerText = show.venue;
        locName.innerText = show.location;
        button.innerText = "BUY TICKETS";


        //adding classes
        showCard.classList.add("shows__card");
        dateLabel.classList.add("shows__label");
        showDate.classList.add("shows__date");
        venueLabel.classList.add("shows__label");
        venueName.classList.add("shows__venue");
        locLabel.classList.add("shows__label");
        locName.classList.add("shows__loc");
        button.classList.add("shows__btn");
        newSec.classList.add("shows__new-sec");



        //html insertion
        showCard.appendChild(dateLabel);
        showCard.appendChild(showDate);
        showCard.appendChild(venueLabel);
        showCard.appendChild(venueName);
        showCard.appendChild(locLabel);
        showCard.appendChild(locName);
        showCard.appendChild(button);


        showsSchedule.appendChild(showCard);
        showsSchedule.appendChild(newSec);

    });




    showsSchedule.addEventListener("click", (e) => {
        const showCards = document.querySelectorAll('.shows__card');

        showCards.forEach(element => element.classList.remove('shows__card--clicked'))
        e.preventDefault();
        console.log(e.target);
        if ((e.target.nodeName === 'DIV') && e.target.classList.contains('shows__card')) {
            e.target.classList.add("shows__card--clicked");
        } else if(e.target.nodeName === 'HR') {
            return;
        }
        else {
            const clickedDiv = e.target.parentNode;
            if(clickedDiv.classList.contains("shows__card"))
                clickedDiv.classList.add("shows__card--clicked");
        }
    });

