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
        blog: "Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out, Chuck Norris originally appeared in the Street Fighter II video game, but was removed by Beta Testers because every button caused him to do a roundhouse kick. When asked bout this glitch, Norris replied, Thats no glitch., Chuck Norris doesnt go hunting... CHUCK NORRIS GOES KILLING, Someone once videotaped Chuck Norris getting pissed off. It was called Walker Texas Chain Saw Massacre. Chuck Norris once tripped over the Rocky Mountains and fell west... we now call it the Grand Canyon There is no theory of evolution. Just a list of creatures Chuck Norris has allowed to live. I am Chuck Norris, and I approve this roundhouse kick Chuck Norris doesn't wash his clothes, he disembowels them, A Handicapped parking sign does not signify that this spot is for handicapped people. It is actually in fact a warning, that the spot belongs to Chuck Norris and that you will be handicapped if you park there. When Chuck Norris does a pushup, he isn't lifting himself up, he's pushing the Earth down.",
        date: "10/07/17"
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
    




