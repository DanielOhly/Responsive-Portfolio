        
// Javascript Objects that hold the HTML for the different pages.
        const landing = {
            home: "<div id=\"landingname\"> Hello!</div>"+
                        "<div class= \"wordsstyle\"<p>My name is Daniel Ohly, I am a junior full stack web developer and recent graduate of the UT Austin Web Development Boot Camp.</p>"+
                        "<p>I am actively looking to acquire a junior position in the web development field. I am incredibly eager to learn more, and join a killer team.</p>"+
                        "<p>I am diligent, focused, and great under pressure. After working in the beer industry for 12 years, being amiable is my strong suit. I can talk with anyone, and I do mean anyone. I'm an incredible asset to a team, and I hope to be a part of yours!</p></div>",
            words:    "<div class=\"hexagon hexagon2\">"+
                            "<div class=\"hexagon-in1\">"+
                                "<div class=\"hexagon-in2\">"+
                                "</div>"+
                            "</div>"+
                        "</div>"
                        
        }

        const dohly = {
            home: "My scoop",
            words: "<p>I spent most of my adult life in the beer industry. Starting in college, schlepping kegs and emptying ashtrays in a German beer hall. In the next 12 years I did every job in the industry imaginable and picked up a lot of skills along the way. Staffing and HR, Office Management, Distribution Arrangement, Cost Analysis, Vendor Management, Event Planning, Contract Negotiation, you name it."+ 
            "No matter what the job entailed specifically, I always stuck to what I saw as my true north:</p>"+
            "<ul><b>Work smart, not hard:</b> Think things through, find the best solutions before you jump head first.</ul>"+
            "<ul><b>Many hands make light work:</b> Sometimes it’s as simple as asking for help, sometimes it’s asking questions from people who’ve been through it.</ul>"+
            "<ul><b>Learn from your mistakes:</b> Everyone makes mistakes, all the time, and that’s cool. As long as you learn from them and keep going.</ul>"+
            "<p>I was inspired to enter into the world of coding by watching the world of beer.  I wanted to work in a field that my work was quantifiable. I absolutely love the idea that my work can stand on it’s own. Where the study and work that I contribute to can live on.  It’s an incredibly gratifying thing, and I absolutely love doing it.<p>"+
            "<p>In my normal human time I love spending time with my wife, checking out restaurants or hanging out with our dogs. I’m a huge D&D nerd, movie buff and comic book dork. I keep my street cred by riding my bike as much as possible. <p>"+
            "<p>My resume is available "+"<a href=\"assets/images/danielohlyresume.pdf\" target=\"blank\">HERE</a></p>"+
            "<p>Thanks for your time!</p>"+
            "<p>BEST!</p>"+
            "<p>Daniel Ohly</p>"            
        }
        const projects = {
            home: "Projects",
            words: "<div class=\"content\"><div id= \"projecttitlename\"><b>Home Movies</b></div>" +
                "<p>An interactive satire site meant to engage people to watch movies together, at other people's homes. An attempt to get people to socialize, in a farscial manner.</p>" +
                "<p>The big lessons learned here were reading a whole lot of documentation, manipulating DOM, and database utilization. </p>"+
                "<p>Utilizing JavaScript, JSON, Firebase, JQuery, Bootstrap, Google Maps API and OMDB API</p><a target=\"blank\" href=\"https://github.com/DanielOhly/homeMovies\">See the code here.</a> The image will launch the site.</div>" +
                "<div class= \"image-content\"><a target= \"blank\"href=\"https://danielohly.github.io/homeMovies/\"><img id=\"image\" src=\"assets/images/homemovies.png\"></a></div>" +
                "<div class=\"content\"><div id= \"projecttitlename\"><b> Nenas Arepa Kitchen </b>" + "</div>" +
                "<p> A simple single page website for a local independent food company<p>" +
                "<p> The goal was to put together a straightforward website that would give the client what they needed, without being too busy or info dense.</p>"+
                "<p> Utilizing JQuery CSS, HTML and Bootstrap<p>" + "</div>" +
                "<div class= \"image-content\"><a target= \"blank\"href=\"http://www.nenasarepakitchen.com/#\"><img id=\"image\" src=\"assets/images/nenas.png\"></a></div>"+
                "<div class=\"content\"><div id= \"projecttitlename\"><b> In Progress: The Heroes of Inesland </b>" + "</div>" +
                "<p> An attempt for my D&D group to keep their character data straight if they leave their character sheets at home. Also as a method of memorializing former campaigns.<p>" +
                "<p> It is utilizing Firebase, JavaScript and JSON Requests, but with the intention of having more user input and user validation.<p>"+
                "<div class= \"image-content\"><a target= \"blank\"href=\"secret.html\"><img id=\"image\" src=\"assets/images/ithicwoods.png\"></a></div>"

        }

        const contacts = {
            home: "Contact Me",
            words: "<div id=\"contact-link-spacing\"><a href=\"mailto:danielohly@gmail.com?Subject=Hey%20Daniel\" target=\"_top\"><img id=\"contact-link-image\" src=\"assets/images/mail.png\"></a></div>"+
            "<div id=\"contact-link-spacing\"><a target=\"blank\" href=\"https://www.linkedin.com/in/daniel-ohly/\"><img id=\"contact-link-image\" src=\"assets/images/linkedin.png\"></a></div>"+ 
            "<div id=\"contact-link-spacing\"><a target=\"blank\" href=\"https://github.com/DanielOhly\"><img id=\"contact-link-image\" src=\"assets/images/github.png\"></a></div>"
        }


//JS Function that changes the two different elements inside the main page.
        function infoChange(arg) {
            document.getElementById("home").innerHTML = arg.home;
            document.getElementById("words").innerHTML = arg.words;
        }
