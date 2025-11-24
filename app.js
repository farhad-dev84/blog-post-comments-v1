const posts = [
    {
        id: 1,
        title: "شروع مسیر برنامه‌نویسی",
        desc: "از کجا شروع کنیم و چطور ادامه بدیم؟",
        date: "1403/08/01"
    },
    {
        id: 2,
        title: "چرا جاوااسکریپت مهمه؟",
        desc: "بررسی نقش JS در فرانت‌اند",
        date: "1403/08/05"
    }
];

const postList = document.getElementById("postList");

posts.forEach((post) => {
    postList.innerHTML += `
        <div class="col-md-6">
            <div class="card p-3">
                <h5>${post.title}</h5>
                <p>${post.desc}</p>
                <small class="text-muted">${post.date}</small>
                <a href="post.html?id=${post.id}" class="btn btn-dark mt-3">مشاهده</a>
            </div>
        </div>
    `;
});
