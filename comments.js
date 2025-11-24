// گرفتن ID پست از URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

const postDetail = document.getElementById("postDetail");

// دیتای پست‌ها

const posts = {
    1: {
        title: "شروع مسیر برنامه‌نویسی",
        content: "در این پست قراره مسیر یادگیری فرانت‌اند رو بررسی کنیم..."
    },
    2: {
        title: "چرا جاوااسکریپت مهمه؟",
        content: "جاوااسکریپت ستون اصلی توسعه وب مدرن است..."
    }
};

// نمایش پست
postDetail.innerHTML = `
    <h2>${posts[postId].title}</h2>
    <p>${posts[postId].content}</p>
`;

// -----------------------
// بخش نظرات
// -----------------------

const commentList = document.getElementById("commentList");
const commentForm = document.getElementById("commentForm");

function loadComments() {
    const comments = JSON.parse(localStorage.getItem(`comments_${postId}`)) || [];

    commentList.innerHTML = "";
    comments.forEach((c) => {
        commentList.innerHTML += `
            <div class="p-3 bg-white shadow-sm rounded mb-2">
                <strong>${c.name}</strong>
                <p class="mb-0">${c.message}</p>
            </div>
        `;
    });
}

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !message) return alert("لطفاً نام و نظر را وارد کنید");

    const newComment = { name, message };

    const comments = JSON.parse(localStorage.getItem(`comments_${postId}`)) || [];
    comments.push(newComment);

    localStorage.setItem(`comments_${postId}`, JSON.stringify(comments));

    commentForm.reset();
    loadComments();
});

loadComments();