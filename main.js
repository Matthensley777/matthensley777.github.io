var blogPost = [

    {
        title: "Week 1 blog post",
        id: "blog1",
        blog: "Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear Chuck Norris drives an ice cream truck covered in human skulls. Chuck Norris can lead a horse to water AND make it drink When Chuck Norris sends in his taxes, he sends blank forms and includes only a picture of himself, crouched and ready to attack. Chuck Norris has not had to pay taxes, ever There is no theory of evolution. Just a list of creatures Chuck Norris has allowed to live. Contrary to popular belief, America is not a democracy, it is a Chucktatorship The CERN's ultimate goal is to find out how Chuck Norris was born Chuck Norris will attain statehood in 2009. His state flower will be the Magnolia Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear, Chuck Norris can win a game of Connect Four in only three moves. Fool me once, shame on you. Fool Chuck Norris once and he will roundhouse you in the face.",
        // image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        date: "10/07/17"
    },

    {
        title: "week 2 blog post",
        id: "blog2",
        blog: "Chuck Norris' hand is the only hand that can beat a Royal Flush If you ask Chuck Norris what time it is, he always says, Two seconds til. After you ask, Two seconds til what? he roundhouse kicks you in the face, There is no chin behind Chuck Norris beard. There is only another fist The quickest way to a mans heart is with Chuck Norris fist. Chuck Norris Facebook picture is 3 dimensional Chuck Norris is currently suing NBC, claiming Law and Order are trademarked names for his left and right legs Chuck Norris won the Nascar season, he was driving a bike. Chuck Norris doesnt churn butter. He roundhouse kicks the cows and the butter comes straight out Chuck Norris can count the corners in a circle Chuck Norris has two speeds. Walk, and Kill Chuck Norris knows all 11 secret herbs and spices. Guns don't kill people. Chuck Norris kills people Chuck Norris does not get frostbite. Chuck Norris bites frost. Chuck Norris has two speeds. Walk, and Kill.",
        // image: "https://e.snmc.io/lk/f/a/bb762aed45757589ffc8a78dfdfc9fe6/1188523.jpg",
        date: "10/07/17"
    },

    {
        title: "week 3 blog post",
        id: "blog3",
        blog: "Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out, Chuck Norris originally appeared in the Street Fighter II video game, but was removed by Beta Testers because every button caused him to do a roundhouse kick. When asked bout this glitch, Norris replied, Thats no glitch., Chuck Norris doesnt go hunting... CHUCK NORRIS GOES KILLING, Someone once videotaped Chuck Norris getting pissed off. It was called Walker Texas Chain Saw Massacre. Chuck Norris once tripped over the Rocky Mountains and fell west... we now call it the Grand Canyon There is no theory of evolution. Just a list of creatures Chuck Norris has allowed to live. I am Chuck Norris, and I approve this roundhouse kick Chuck Norris doesn't wash his clothes, he disembowels them, A Handicapped parking sign does not signify that this spot is for handicapped people. It is actually in fact a warning, that the spot belongs to Chuck Norris and that you will be handicapped if you park there. When Chuck Norris does a pushup, he isn't lifting himself up, he's pushing the Earth down.",
        // image: "http://2.darkroom.shortlist.com/980/322f1f6f28cb50da01bbef3346797c4b:4eef786afce2adfc5c7752e0cf04ab0c/john-lennon",
        date: "10/07/17"
    },

    {
        title: "week 4 blog post",
        id: "blog4",
        blog: "Chuck Norris is so fast, he can run around the world and punch himself in the back of the head, The quickest way to a man's heart is with Chuck Norris' fist, Guns don't kill people. Chuck Norris kills people Crop circles are Chuck Norris' way of telling the world that sometimes corn needs to lie down Chuck Norris once roundhouse kicked someone so hard that his foot broke the speed of light, went back in time, and killed Amelia Earhart while she was flying over the Pacific Ocean Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out Chuck Norris doesn't wear a watch. HE decides what time it is, Chuck Norris is my Homeboy Fool me once, shame on you. Fool Chuck Norris once and he will roundhouse you in the face.",
        // image: "https://beatlemedo.files.wordpress.com/2013/01/george-harrison-living.jpg",
        date: "10/07/17"
    },
    {
        title: "week 5 blog post",
        id: "blog5",
        blog: "Chuck Norris is so fast, he can run around the world and punch himself in the back of the head, The quickest way to a man's heart is with Chuck Norris' fist, Guns don't kill people. Chuck Norris kills people Crop circles are Chuck Norris' way of telling the world that sometimes corn needs to lie down Chuck Norris once roundhouse kicked someone so hard that his foot broke the speed of light, went back in time, and killed Amelia Earhart while she was flying over the Pacific Ocean Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out Chuck Norris doesn't wear a watch. HE decides what time it is, Chuck Norris is my Homeboy Fool me once, shame on you. Fool Chuck Norris once and he will roundhouse you in the face.",
        // image: "https://beatlemedo.files.wordpress.com/2013/01/george-harrison-living.jpg",
        date: "10/07/17"
    }
]

var blogOutPut = document.getElementById("blogHolder");
for (var counter = 0; counter < blogPost.length; counter++) {
    blogOutPut.innerHTML += `<div><h2>${blogPost[counter].title}</h2>
    <header><h3>${blogPost[counter].blog}</h3></header> <section><p>${blogPost[counter].date}</p>
    <img class="grandChild" src="${blogPost[counter].image}"/></section>
    </div>`;
}
    




