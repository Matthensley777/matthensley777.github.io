var blogPost = [

    {
        title: "Week 1 blog post",
        id: "blog1",
        blog: "This week we learned how to loop through arrays and how to have the array print to DOM. We did projects that had us take 2 arrays and merge them into one, all in all they were pretty easy, I did not cry in the shower this week.",
        date: "07/31/17"
    },

    {
        title: "Week 2 blog post",
        id: "blog2",
        blog: "This week we worked on a project that generated a coin counter, and a project that converts temperature from Fahrenheit to Celsius and back again.",
        date: "08/07/17"
    },

    {
        title: "Week 3 blog post",
        id: "blog3",
        blog: "This week we learned about event listeners. We had 3 assignments that we used event listeners on, Dynamic Cards, Guinea Pig, and WYSIWYG.  WYSIWYG was by far the most challenging, there was a lot of layers to it.  All in all I feel like I have a pretty good grasp on event listeners at this point.",
        date: "08/22/17"
    },

    {
        title: "Week 4 blog post",
        id: "blog4",
        blog: "Chuck Norris is so fast, he can run around the world and punch himself in the back of the head, The quickest way to a man's heart is with Chuck Norris' fist, Guns don't kill people. Chuck Norris kills people Crop circles are Chuck Norris' way of telling the world that sometimes corn needs to lie down Chuck Norris once roundhouse kicked someone so hard that his foot broke the speed of light, went back in time, and killed Amelia Earhart while she was flying over the Pacific Ocean Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out Chuck Norris doesn't wear a watch. HE decides what time it is, Chuck Norris is my Homeboy Fool me once, shame on you. Fool Chuck Norris once and he will roundhouse you in the face.",
        date: "10/07/17"
    },
    {
        title: "Week 5 blog post",
        id: "blog5",
        blog: "Chuck Norris is so fast, he can run around the world and punch himself in the back of the head, The quickest way to a man's heart is with Chuck Norris' fist, Guns don't kill people. Chuck Norris kills people Crop circles are Chuck Norris' way of telling the world that sometimes corn needs to lie down Chuck Norris once roundhouse kicked someone so hard that his foot broke the speed of light, went back in time, and killed Amelia Earhart while she was flying over the Pacific Ocean Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out Chuck Norris doesn't wear a watch. HE decides what time it is, Chuck Norris is my Homeboy Fool me once, shame on you. Fool Chuck Norris once and he will roundhouse you in the face.",
        date: "10/07/17"
    }
]

var blogOutPut = document.getElementById("blogHolder");
for (var counter = 0; counter < blogPost.length; counter++) {
    blogOutPut.innerHTML += `<div class="blogHolder"><h2>${blogPost[counter].title}</h2>
    <header><h3>${blogPost[counter].blog}</h3></header> <section><p>${blogPost[counter].date}</p>
    <img class="grandChild" src="${blogPost[counter].image}"/></section>
    </div>`;
}
    




