    fetchComments();
    submit();

    function fetchComments(){
        axios.get("https://project-1-api.herokuapp.com/comments/?api_key=f8ca13e4-fee9-4e74-8598-bc3b89d638b4")
        .then((res) => {
            const comments  = res.data.sort((x, y) => {
                return y.timestamp - x.timestamp;
            })
            displayComment(comments);
        }).catch((error) => {
    
        })
    }
    function displayComment(comments) {
    
        const commentsSection = document.querySelector(".comments");
        commentsSection.innerHTML = "";
        //looping through each comment
        comments.forEach((comment) => {

            const commentContainer = document.createElement("div");
            const avatarContainer = document.createElement("div");
            const userDetail = document.createElement("div");
            const nameContainer = document.createElement("div");
            const dateContainer = document.createElement("div");
            const name = document.createElement("p");
            const date = document.createElement("p");
            const commentDes = document.createElement("div");
            const userComment = document.createElement("div");
            name.innerText = comment.name;
            date.innerText = (new Date(comment.timestamp).toLocaleDateString("en-US"));
            commentDes.innerText = comment.comment;

            avatarContainer.classList.add("comments__avatar-cont");
            userDetail.classList.add("comments__user-detail");
            name.classList.add("comments__name");
            date.classList.add("comments__date");
            commentDes.classList.add("comments__comment-des");
            userComment.classList.add("comments__user-cont");
            commentContainer.classList.add("comments__comment-cont");

            nameContainer.appendChild(name);
            dateContainer.appendChild(date);
            userDetail.append(nameContainer, dateContainer);
            userComment.append(userDetail, commentDes);
            commentContainer.append(avatarContainer, userComment);
            commentsSection.appendChild(commentContainer);
        });   
    };
    function submit(){
        const form = document.querySelector(".conv__form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            axios.post("https://project-1-api.herokuapp.com/comments/?api_key=f8ca13e4-fee9-4e74-8598-bc3b89d638b4", {
                name: e.target.name.value,
                comment: e.target.comment.value
            }).then((res) =>{
                fetchComments();
            }).catch((error) =>{
                console.log(error);
            })
            form.reset()
        });

    }