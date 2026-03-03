type Song = HTMLAudioElement;
let current_song : Song | undefined;
let current_title : string;
let active_selection : string = " ";
let queuearray : Array<string> = [];
let canqueue : boolean = false;

const lyrics : Record<string, string> = {
    'Albanian Bartender' : "Verse 1 Felix missed his train again\n" +
                        "Wet cuff\n" +
                        "Cold hands\n" +
                        "Stumbled through a red door glow\n" +
                        "Half past ten\n\n" +
                        "He ordered in a quiet voice\n" +
                        "Didn't look up first\n" +
                        "Till he heard a low laugh say\n" +
                        "I'll fix the thirst\n\n" +
                        "Dark hair tied back\n" +
                        "Name tag slightly bent\n" +
                        "Accent like a slow song\n" +
                        "Soft and confident\n\n" +
                        "[Chorus]\n" +
                        "Oh my Albanian bartender\n" +
                        "Say my name like you remember\n" +
                        "Every pour, every grin\n" +
                        "Makes me wanna taste your skin\n" +
                        "Didn't plan to stay till dawn\n" +
                        "But your touch keeps pulling me on\n" +
                        "Felix laughing, saying one more round\n" +
                        "While the whole damn room spins upside down\n\n" +
                        "[Verse 2]\n" +
                        "You're new here? he asked\n" +
                        "Soap on his hands\n" +
                        "Felix traced the pattern\n" +
                        "Of a ringless tan\n\n" +
                        "Shared a pack of stories\n" +
                        "By the dish room light\n" +
                        "How he crossed an ocean\n" +
                        "Chasing something bright\n\n" +
                        "Felix watched his mouth move\n" +
                        "Forgot about the rain\n" +
                        "How a stranger wiping counters\n" +
                        "Could make him feel this way\n\n" +
                        "[Chorus]\n" +
                        "Oh my Albanian bartender\n" +
                        "Say my name like you remember\n" +
                        "Every pour, every grin\n" +
                        "Makes me wanna taste your skin\n" +
                        "Didn't plan to stay till dawn\n" +
                        "But your touch keeps pulling me on\n" +
                        "Felix laughing, saying one more round\n" +
                        "While the whole damn room spins upside down\n\n" +
                        "[Bridge]\n" +
                        "Last call\n" +
                        "Chairs on tables\n" +
                        "Keys around his wrist (hey)\n" +
                        "Stay a while\n" +
                        "he murmurs\n" +
                        "Place is ours like this\n\n" +
                        "Felix laughs too loudly\n" +
                        "Heart against his ribs\n" +
                        "As a careful\n" +
                        "Steady hand\n" +
                        "Finds a place on his\n\n" +
                        "[Chorus]\n" +
                        "Oh my Albanian bartender\n" +
                        "You say my name like it belongs here\n" +
                        "Every pour\n" +
                        "Every small joke\n" +
                        "Pulled me right over your side of the counter\n" +
                        "Didn't know love spoke in your language\n" +
                        "Till you answered me in a whisper\n" +
                        "Felix walked out in the morning\n" +
                        "But his heart stayed with the bartender",
    'Red Eagle, Gold Chain' : "[Verse 1]\n" +
                        "Uncle drives up from Tirana\n" +
                        "Trunk full of bags and plans\n" +
                        "Kisses both my cheeks\n" +
                        "He's laughing\n" +
                        "Come here\n" +
                        "Light me one\n" +
                        "My man\n" +
                        "\n" +
                        "Silver ash on kitchen tiles\n" +
                        "Rakia in a coffee cup\n" +
                        "Gold chain shining on his chest\n" +
                        "Says for us\n" +
                        "It's always up\n" +
                        "\n" +
                        "[Chorus]\n" +
                        "For my Albanians (hey!)\n" +
                        "Raise that glass and sing\n" +
                        "Gold chain on my neck\n" +
                        "Red eagle in my skin\n" +
                        "All my uncles at the table\n" +
                        "Stories loud as war\n" +
                        "We got love for Albania\n" +
                        "And we always want some more\n" +
                        "\n" +
                        "[Verse 2]\n" +
                        "Auntie says he drinks too early\n" +
                        "He just winks\n" +
                        "it's never late\n" +
                        "Passes me the homemade bottle\n" +
                        "Says remember where you're made\n" +
                        "\n" +
                        "Balcony full of blue-grey circles\n" +
                        "Laughter floating in the air\n" +
                        "Every cousin\n" +
                        "Every neighbor\n" +
                        "Feels like I got family everywhere\n" +
                        "\n" +
                        "[Chorus]\n" +
                        "For my Albanians (hey!)\n" +
                        "Raise that glass and sing\n" +
                        "Gold chain on my neck\n" +
                        "Red eagle in my skin\n" +
                        "All my uncles at the table\n" +
                        "Stories loud as war\n" +
                        "We got love for Albania\n" +
                        "And we always want some more\n" +
                        "\n" +
                        "[Bridge]\n" +
                        "From the village to the city (ah!)\n" +
                        "Same toast\n" +
                        "Same flame\n" +
                        "We argue\n" +
                        "Hug\n" +
                        "Get dizzy\n" +
                        "Still proud of our name\n" +
                        "Rakia burns\n" +
                        "Heart burns brighter\n" +
                        "Every sip\n" +
                        "We swear it's true\n" +
                        "If there's smoke and if there's laughter\n" +
                        "Know an Albanian loves you\n" +
                        "\n" +
                        "[Chorus]\n" +
                        "For my Albanians (hey!)\n" +
                        "Raise that glass and sing\n" +
                        "Gold chain on my neck\n" +
                        "Red eagle in my skin\n" +
                        "All my uncles at the table\n" +
                        "Stories loud as war\n" +
                        "We got love for Albania\n" +
                        "And we always want some more\n",
    'Sun-Kissed in Albania' : "[Verse 1]\n" +
                        "Sticky fingers from the baklava\n" +
                        "Crumbs on my shirt\n" +
                        "Can't shake them off\n" +
                        "Teta yelling that the coffee's cold\n" +
                        "Zoti im\n" +
                        "The day is gold\n\n" +
                        "Byrek cooling on the window rail\n" +
                        "Flaking in the lazy gale\n" +
                        "They all swear the storm will come\n" +
                        "But the sky just laughs at everyone\n\n" +
                        "[Chorus]\n" +
                        "It never rains in Albania\n" +
                        "Just heat in the sun and a table for twenty\n" +
                        "Uncles lined up like a stadium\n" +
                        "Talking way too loud\n" +
                        "But it all feels plenty\n" +
                        "Moped humming down the lane\n" +
                        "Olive trees and gasolene\n" +
                        "It never rains in Albania\n" +
                        "Just you\n" +
                        "Me\n" +
                        "And this summer sheen (hey!)\n\n" +
                        "[Verse 2]\n" +
                        "Kick the stand\n" +
                        "You jump on the back\n" +
                        "Plastic bag swinging\n" +
                        "Fresh bread stack\n" +
                        "We weave around goats in the dusty bend\n" +
                        "Every cousin waving like a best friend\n\n" +
                        "Uncle says he used to race this road\n" +
                        "Same old story\n" +
                        "Every year retold\n" +
                        "He points at the hills\n" +
                        "Says \"that's my land\"\n" +
                        "Maps in his eyes\n" +
                        "Coffee in his hand\n\n" +
                        "[Chorus]\n" +
                        "It never rains in Albania\n" +
                        "Just heat in the sun and a table for twenty\n" +
                        "Uncles lined up like a stadium\n" +
                        "Talking way too loud\n" +
                        "But it all feels plenty\n" +
                        "Moped humming down the lane\n" +
                        "Olive trees and gasolene\n" +
                        "It never rains in Albania\n" +
                        "Just you\n" +
                        "Me\n" +
                        "And this summer sheen\n\n" +
                        "[Bridge]\n" +
                        "Pass the byrek\n" +
                        "Pass the plate (oh yeah)\n" +
                        "Pass the hours 'til it's late\n" +
                        "If the clouds come\n" +
                        "Let them try\n" +
                        "We got shade in each other's eyes\n\n" +
                        "[Chorus]\n" +
                        "It never rains in Albania\n" +
                        "Just heat in the sun and a table for twenty\n" +
                        "Uncles lined up like a stadium\n" +
                        "Talking way too loud\n" +
                        "But it all feels plenty\n" +
                        "Moped humming down the lane\n" +
                        "Olive trees and gasolene\n" +
                        "It never rains in Albania\n" +
                        "Just you\n" +
                        "Me\n" +
                        "And this summer sheen",
    'City Mail Special Delivery' : "[Verse 1]\n" +
                        "Felix got his name tag crooked\n" +
                        "Coffee stain on his blue work tee\n" +
                        "Theodor rollin' up that mail cart\n" +
                        "Smirkin' like \"boy, you lookin' at me?\"\n" +
                        "Sorting all these bills and flyers\n" +
                        "Heat stuck in that break-room air\n" +
                        "Under all these fluorescent halos\n" +
                        "He's swearin' there's a halo on that boy right there\n\n" +
                        "[Chorus]\n" +
                        "City mail, special delivery\n" +
                        "He's my certified gay priority\n" +
                        "Stack those boxes, bend that back\n" +
                        "Lord, that view could make me catch a heart attack (oh!)\n" +
                        "We got letters, we got lube in the drawer\n" +
                        "Clock-in kissing by the loading door\n" +
                        "Who says love can't come with a barcode scan?\n" +
                        "Bottom's rights, baby, in a top man's van\n\n" +
                        "[Verse 2]\n" +
                        "He said \"Felix, can you help me, darlin'?\n" +
                        "These packages heavy as sin\"\n" +
                        "Felix said \"I'll handle your cargo\"\n" +
                        "Hand on his waist as he pulls him in\n" +
                        "Barcode beepin' like a heartbeat\n" +
                        "Clipboard hittin' the floor\n" +
                        "Boss man bangin' on the office window\n" +
                        "\"Y'all sort that passion on your own time, boys\"\n\n" +
                        "[Chorus]\n" +
                        "City mail, special delivery\n" +
                        "He's my certified gay priority\n" +
                        "Stack those boxes, bend that back\n" +
                        "Lord, that view could make me catch a heart attack (hey!)\n" +
                        "We got letters, we got lube in the drawer\n" +
                        "Clock-in kissing by the loading door\n" +
                        "Who says love can't come with a barcode scan?\n" +
                        "Bottom's rights, baby, in a top man's van\n\n" +
                        "[Bridge]\n" +
                        "They say \"son, that ain't how country goes\"\n" +
                        "He said \"watch these steel-toe boots on tiptoes\"\n" +
                        "Spurs on his accent, glitter in his grin\n" +
                        "Lickin' all the stamps and the boys like him\n" +
                        "From dirt road dreams to the downtown dock\n" +
                        "He's the reason that the drop box rock\n" +
                        "Two queer cowboys in a concrete barn\n" +
                        "Turnin' that mailroom into a honky-tonk charm (woo!)\n\n" +
                        "[Chorus]\n" +
                        "City mail, special delivery\n" +
                        "He's my certified gay priority\n" +
                        "Stack those boxes, bend that back\n" +
                        "Lord, that view could make me catch a heart attack\n" +
                        "We got letters, we got lube in the drawer\n" +
                        "Clock-in kissing by the loading door\n" +
                        "Who says love can't come with a barcode scan?\n" +
                        "Bottom's rights, baby, that's the house brand man\n\n" +
                        "[Outro]\n" +
                        "Stamp it, seal it, kiss it then send\n" +
                        "Felix found love in his work best friend\n" +
                        "City mail boy with a country drawl\n" +
                        "When he says \"special handling\"\n" +
                        "You know he means it all",
    'Gustav Got a boyfriend' : "No lyrics available for this one, sorry!",
    'Filthy Halo' : "[Verse 1]\n" +
                        "Gustav's got that crooked grin,\n" +
                        "Sin on his mouth, pulling me in.\n" +
                        "Loki laughs like he owns the night,\n" +
                        "Hands on my hips, grip too tight.\n\n" +
                        "You say my name like it's a dare,\n" +
                        "Drag me closer by the hair.\n" +
                        "Breath on my neck, low and slow,\n" +
                        "\"Be a good boy,\" don't say no.\n\n" +
                        "[Pre-Chorus]\n" +
                        "Teeth on skin, leave it red,\n" +
                        "Say you want me on your bed.\n" +
                        "Knees pressed hard between your thighs,\n" +
                        "You love the look behind my eyes.\n\n" +
                        "[Chorus]\n" +
                        "Loki, talk that dirty talk,\n" +
                        "Make me stumble when I walk.\n" +
                        "Gustav, push me past my pride,\n" +
                        "Keep your wicked hands inside.\n" +
                        "We don't blush — we make a scene,\n" +
                        "Sweat and laughter, sharp and mean.\n" +
                        "If heaven's clean, we'll never go —\n" +
                        "Now put the cock in deep bro.\n\n" +
                        "[Verse 2]\n" +
                        "Gustav's fingers digging deep,\n" +
                        "Promises he doesn't keep.\n" +
                        "Loki biting down my lip,\n" +
                        "Hands sliding lower on my hips.\n\n" +
                        "\"Say you want it,\" he commands,\n" +
                        "Tracing lines with greedy hands.\n" +
                        "Mocking tone, but heavy breath,\n" +
                        "Playing love like sudden death.\n\n" +
                        "[Pre-Chorus]\n" +
                        "You like control, I like the fight,\n" +
                        "Bodies tangled, black and white.\n" +
                        "Pull me back when I pretend,\n" +
                        "You know I'll fold in the end.\n\n" +
                        "[Chorus]\n" +
                        "Loki, make me beg your name,\n" +
                        "Make it sound obscene and vain.\n" +
                        "Gustav, drag me to the floor,\n" +
                        "Say you've never wanted more.\n" +
                        "Bury your cock, make me scream,\n" +
                        "You are my Egyptian dream,\n" +
                        "If this is wrong, don't let it stop —\n" +
                        "Let me ride you on top.\n\n" +
                        "[Bridge]\n" +
                        "Hands pinned tight,\n" +
                        "Breath getting rough,\n" +
                        "You say \"enough?\"\n" +
                        "It's never too rough\n\n" +
                        "You smirk like a saint gone wrong,\n" +
                        "Pull me closer, prove me wrong.\n" +
                        "We don't love — we take, we steal,\n" +
                        "Stroke it till you make it cream.",
    'Russian Bathhouse' : "[Verse 1]\n" +
                        "Loki's laughing\n" +
                        "Water in his hair\n" +
                        "Tile floor slick\n" +
                        "Leo at the door\n" +
                        "Cheeks gone red\n" +
                        "Eyes on the floor\n\n" +
                        "[Chorus]\n" +
                        "Steam between us\n" +
                        "But I see you clear\n" +
                        "Name the fog line\n" +
                        "Right next to mine\n" +
                        "Loki's heat i saviour\n" +
                        "I love you\n" +
                        "Do me a favour\n" +
                        "Slide that thing in\n\n" +
                        "[Verse 2]\n" +
                        "Birch leaves\n" +
                        "On bare skin\n" +
                        "Warm\n" +
                        "Leo's stare\n" +
                        "Keeps pulling him in\n" +
                        "Gold gleam\n" +
                        "Drip from his chin\n" +
                        "One small joke\n" +
                        "And they both give in\n\n" +
                        "[Chorus]\n" +
                        "Steam between us\n" +
                        "But I see you clear\n" +
                        "Name the fog line\n" +
                        "Right next to mine\n" +
                        "Loki's heat i saviour\n" +
                        "I love you\n" +
                        "Do me a favour\n" +
                        "Slide that thing in\n\n" +
                        "[Bridge]\n" +
                        "Quiet Russian voices\n" +
                        "Muffled through the wall\n" +
                        "Loki whispers\n" +
                        "\"stay\"\n" +
                        "Leo doesn't stall\n" +
                        "Hand on a heartbeat\n" +
                        "Salt on a tongue\n" +
                        "Winter outside\n" +
                        "Summer begun\n\n" +
                        "[Chorus]\n" +
                        "Steam between us\n" +
                        "But I see you clear\n" +
                        "Name the fog line\n" +
                        "Right next to mine\n" +
                        "He smiled at me\n" +
                        "I love you\n" +
                        "And he finally\n" +
                        "Slid it in",
    'Bror Henke' : "[Vers 1]\n" +
                        "Henke vaknar\n" +
                        "Samma tröja\n" +
                        "Kaffe\n" +
                        "Macka\n" +
                        "Mobilen på\n" +
                        "Hjärtat stort som halva stan\n" +
                        "Skrattar högt åt minsta skämt han får\n\n" +
                        "Han kramar alla i sin närhet\n" +
                        "Som om världen snart tar slut\n" +
                        "Säger \"bror\" till varje människa\n" +
                        "Som vågar möta hans minut\n\n" +
                        "[Chorus]\n" +
                        "Henke\n" +
                        "Han älskar\n" +
                        "Älskar själva ordet \"bror\"\n" +
                        "Han säger \"bror\" så ofta\n" +
                        "Det blir som ett eget språk han tror\n" +
                        "Henke\n" +
                        "Han delar\n" +
                        "Som om det växer mer i år\n" +
                        "Varje gång han viskar\n" +
                        "\"jag är här för dig\n" +
                        "Min bror\"\n\n" +
                        "[Vers 2]\n" +
                        "På krogen står han mitt i rummet\n" +
                        "Hälsar runt som en konferencier\n" +
                        "\"Bror\n" +
                        "Hur mår du? Bror\n" +
                        "Vad händer?\"\n" +
                        "Ingen går hem ensam mer\n\n" +
                        "Han skriver hjärtan i sina chattar\n" +
                        "Tre på rad när orden tar slut\n" +
                        "\"Bror\n" +
                        "Du vet jag backar alltid\"\n" +
                        "Det är hans löfte varje minut\n\n" +
                        "[Chorus]\n" +
                        "Henke\n" +
                        "Han älskar\n" +
                        "Älskar själva ordet \"bror\"\n" +
                        "Han säger \"bror\" så ofta\n" +
                        "Det blir som ett eget språk han tror\n" +
                        "Henke\n" +
                        "Han delar\n" +
                        "Som om det växer mer i år\n" +
                        "Varje gång han viskar\n" +
                        "\"jag är här för dig\n" +
                        "Min bror\"\n\n" +
                        "[Bridge]\n" +
                        "En dag blir han kanske trött\n" +
                        "Rösten hes\n" +
                        "Men känslan kvar\n" +
                        "Då hör man ändå hur han ler\n" +
                        "I varje \"bror\" han har\n\n" +
                        "[Chorus]\n" +
                        "Henke\n" +
                        "Han älskar\n" +
                        "Älskar själva ordet \"bror\"\n" +
                        "Han säger \"bror\" så ofta\n" +
                        "Det blir som ett eget språk han tror\n" +
                        "Henke\n" +
                        "Han delar\n" +
                        "Som om det växer mer i år\n" +
                        "Hela världen ekar\n" +
                        "\"vi är med dig\n" +
                        "Bror\n" +
                        "Vår bror\"",
    'Red Flag Paradise' : "[Verse 1]\n" +
                        "Daniel Parker\n" +
                        "Golden ticket in his hand\n" +
                        "\"Just a harmless little party\n" +
                        "On a private strip of sand\"\n" +
                        "Big plane\n" +
                        "Small runway\n" +
                        "Laughs pouring out the door\n" +
                        "Every smile just a little too shiny\n" +
                        "As they take his phone at the floor\n\n" +
                        "[Chorus]\n" +
                        "Welcome to Epstein's paradise\n" +
                        "Where the drinks taste sweet\n" +
                        "Everyone's saying \"lucky kid\"\n" +
                        "While they circle like they're picking meat\n" +
                        "Red flag paradise\n" +
                        "Where the grown men grin too wide\n" +
                        "Daniel\n" +
                        "You should be running\n" +
                        "Not enjoying the ride\n\n" +
                        "[Verse 2]\n" +
                        "\"My parents said he's famous\n" +
                        "He can help you chase your dream\"\n" +
                        "He just wanted sun and ocean\n" +
                        "Not the shadows in between\n" +
                        "Fancy rooms\n" +
                        "Locked hallways\n" +
                        "Names whispered like a spell\n" +
                        "Every yes feels like surrender\n" +
                        "Every \"it's fine\" feels like hell\n\n" +
                        "[Chorus]\n" +
                        "Welcome to Epstein's paradise\n" +
                        "Where the drinks taste sweet\n" +
                        "Every joke has broken edges\n" +
                        "Every compliment feels sold\n" +
                        "Red flag paradise\n" +
                        "Where the truth gets tied up tight\n" +
                        "Daniel\n" +
                        "This isn't heaven\n" +
                        "It's a secret built from fright\n\n" +
                        "[Bridge]\n" +
                        "He stares at the waterline\n" +
                        "Wonders\n" +
                        "\"Is this what rich means?\"\n" +
                        "If this is how the world works\n" +
                        "He wants nothing from these kings\n" +
                        "Throws his wristband in the ocean\n" +
                        "Heart pounding\n" +
                        "Throat gone dry\n" +
                        "Starts walking toward the runway\n" +
                        "But he gets stopped, watching the ocean spray\n\n" +
                        "[Chorus]\n" +
                        "Welcome to Epstein's paradise\n" +
                        "Where the drinks taste sweet\n" +
                        "He's basking in the sun\n" +
                        "Enjoying this forbidden fun\n" +
                        "The island is great\n" +
                        "Daniel can't see straight\n" +
                        "A fine estate\n" +
                        "Daniel loves big E's private island\n" +
                        "Will never leave this lovely diamond",
    'Omen in The Lords church' : "[Intro]\n" +
                        "It's gettin' late in Tokyo\n" +
                        "(Oh, oh-oh, oh, oh-oh, oh, oh-oh)\n" +
                        "I see you with a girl I know\n" +
                        "(Oh, oh-oh, oh, oh-oh, oh, oh-oh)\n" +
                        "\n" +
                        "Loki\n" +
                        "I met you in a church on a Sunday\n" +
                        "In a church\n" +
                        "And we were not there for the Lord's way, no\n" +
                        "We were there for the whore's way, yeah\n" +
                        "It was crazy\n" +
                        "\n" +
                        "[Verse]\n" +
                        "She lookin' at me like, \"What do you want?\"\n" +
                        "(Oh, oh-oh, oh, oh-oh, oh, oh-oh)\n" +
                        "Then you came over like, \"Come on\"\n" +
                        "(Oh, oh-oh, oh, oh-oh, oh, oh-oh)\n" +
                        "\n" +
                        "He said his name is Loki\n" +
                        "(Oh, oh-oh, oh, oh-oh, oh, oh-oh)\n" +
                        "He's from Korea but we met in Tokyo\n" +
                        "(Oh, oh-oh, oh, oh-oh, oh, oh-oh)\n" +
                        "He said, \"I'll teach you Korean if you want\"\n" +
                        "(Oh, oh-oh, oh, oh-oh, oh, oh-oh)\n" +
                        "I said, \"I don't care as long as you're the one\"\n" +
                        "(Oh, oh-oh, oh, oh-oh, oh, oh-oh)\n" +
                        "\n" +
                        "[Pre-Chorus]\n" +
                        "And now I'm thinkin' you might be my boyfriend\n" +
                        "'Cause you lookin' at me, lookin' like you own it\n" +
                        "Then you pull me closer like you got a moment\n" +
                        "Oh my God, you could be my omen\n" +
                        "\n" +
                        "Loki\n" +
                        "On the Lord's day\n" +
                        "Met you in a church on a Sunday\n" +
                        "We weren't there for the Lord's way\n" +
                        "On the Lord's day\n" +
                        "There for the whore's way\n" +
                        "Crazy\n" +
                        "\n" +
                        "[Chorus – Mash]\n" +
                        "Now I don't wanna go home, I don't wanna go home\n" +
                        "Baby, no, no, no, no\n" +
                        "Loki, on the Lord's day\n" +
                        "Met you in a church on a Sunday\n" +
                        "\n" +
                        "Now I don't wanna go home, I don't wanna go home\n" +
                        "Baby, no, no, no, no\n" +
                        "We weren't there for the Lord's way\n" +
                        "On the Lord's day, there for the whore's way\n" +
                        "Crazy\n" +
                        "\n" +
                        "[Post-Chorus]\n" +
                        "Ooh, ooh-ooh\n" +
                        "Loki, Felix in a truck on the Lord's day\n" +
                        "Ooh, ooh-ooh\n" +
                        "Lets just get down and fuck on the Lord's day\n" +
                        "\n" +
                        "[Bridge – Call & Response]\n" +
                        "And now I'm thinkin' you might be my boyfriend\n" +
                        "Loki, in a church on a Sunday\n" +
                        "'Cause you lookin' at me, lookin' like you own it\n" +
                        "We weren't there for the Lord's way, no\n" +
                        "Then you pull me closer like you got a moment\n" +
                        "There for the whore's way, it was crazy\n" +
                        "Oh my God, you could be my omen\n" +
                        "Oh my God, you could be my omen\n" +
                        "\n" +
                        "[Final Hook]\n" +
                        "Now I don't wanna go home, I don't wanna go home\n" +
                        "Baby, no, no, no, no\n" +
                        "Loki, on the Lord's day\n" +
                        "There for the whore's way\n" +
                        "\n" +
                        "Now I don't wanna go home, I don't wanna go home\n" +
                        "Baby, no, no, no, no\n" +
                        "Tokyo nights and a Sunday church day\n" +
                        "Loki in my mind and I don't wanna go\n" +
                        "\n" +
                        "Ooh, ooh-ooh\n" +
                        "It was crazy\n" +
                        "Ooh, ooh-ooh\n" +
                        "You could be my omen, Loki",
    'Nackas Starkaste Krigare' : "[Vers 1]\n" +
                        "Neo vid styret\n" +
                        "Kostym men kepsen sned\n" +
                        "Sitter på Pong-tronen\n" +
                        "Skrattar åt allt som sker\n" +
                        "Signar en deal på servetten\n" +
                        "Snabbare än du hinner blinka\n" +
                        "Nacka i toppen på kartan\n" +
                        "Annars kan dom andra dra och springa\n\n" +
                        "[Chorus]\n" +
                        "Vi är Nackas starkaste krigare (ey!)\n" +
                        "Från Forum upp till grå betong\n" +
                        "Vi är Nackas starkaste krigare (åh!)\n" +
                        "Vår gata\n" +
                        "Vår skrik-sång\n" +
                        "Neo\n" +
                        "Adam\n" +
                        "Lilla Lowe i ledet\n" +
                        "Nacka i blodet\n" +
                        "Du vet det\n" +
                        "Nackas starkaste krigare\n" +
                        "Tills sista tåget går hem\n\n" +
                        "[Vers 2]\n" +
                        "Adam blir skitfull\n" +
                        "Redan klockan kvart i fem\n" +
                        "Står på bordet och ropar\n" +
                        "\"alla ska med hem till Nacka igen!\"\n" +
                        "Säger för mycket\n" +
                        "För högt\n" +
                        "Alla ba \"bror\n" +
                        "Ta det lugnt\"\n" +
                        "Han bara \"lugn är för fega\n" +
                        "Vi har Nacka i vår pung!\"\n\n" +
                        "[Chorus]\n" +
                        "Vi är Nackas starkaste krigare (ey!)\n" +
                        "Från Forum upp till grå betong\n" +
                        "Vi är Nackas starkaste krigare (åh!)\n" +
                        "Vår gata\n" +
                        "Vår skrik-sång\n" +
                        "Neo\n" +
                        "Adam\n" +
                        "Lilla Lowe i ledet\n" +
                        "Nacka i blodet\n" +
                        "Du vet det\n" +
                        "Nackas starkaste krigare\n" +
                        "Tills sista tåget går hem\n\n" +
                        "[Bridge]\n" +
                        "Lowe är nollsexa\n" +
                        "Liten men han står som sten\n" +
                        "jag tar hela jävla Nacka\n" +
                        "Ge mig bara en scen! (ey!)\n" +
                        "Bär våra jackor hem\n" +
                        "Men snackar som en general\n" +
                        "en dag styr jag alltihopa\n" +
                        "Nacka blir mitt eget val\n\n" +
                        "[Chorus]\n" +
                        "Vi är Nackas starkaste krigare (ey!)\n" +
                        "Från Forum upp till grå betong\n" +
                        "Vi är Nackas starkaste krigare (åh!)\n" +
                        "Vår gata\n" +
                        "Vår skrik-sång\n" +
                        "Neo\n" +
                        "Adam\n" +
                        "Lilla Lowe i ledet\n" +
                        "Nacka i blodet\n" +
                        "Du vet det\n" +
                        "Nackas starkaste krigare\n" +
                        "Tills sista tåget går hem",
    'Bubblor och Ballader' : "[Vers 1]\n" +
                        "Alfred vaknar sent\n" +
                        "Men han är klar\n" +
                        "Korkar upp en flaska\n" +
                        "Det är lördag kvar\n" +
                        "Snuset under läppen\n" +
                        "Världen känns mjuk\n" +
                        "Han nynnar på en gammal låt\n" +
                        "Tar ännu ett sug\n\n" +
                        "[Pre-Chorus]\n" +
                        "Han säger \"en kväll till\n" +
                        "Sen blir jag snäll\"\n" +
                        "Men alla vet hur det där brukar gå\n\n" +
                        "[Chorus]\n" +
                        "Alfred\n" +
                        "Bubblor och ballader\n" +
                        "Skål för alla dina vanor\n" +
                        "Alla små laster\n" +
                        "Från vin i köket till Guinness på baren\n" +
                        "Du skrattar högst åt den sämsta idén\n" +
                        "Alfred\n" +
                        "Alltid i finalen\n" +
                        "Med sång i huvudet och skratt i lokalen\n" +
                        "Du höjer glaset\n" +
                        "Livet i kanalen\n" +
                        "(vilken show igen)\n\n" +
                        "[Vers 2]\n" +
                        "Musikaler på hög volym i hans rum\n" +
                        "Sjunger alla roller\n" +
                        "Tappar nästan rum\n" +
                        "Skivor som har snurrat sen han var barn\n" +
                        "Låter som ett hjärta som aldrig blir kargt\n\n" +
                        "[Pre-Chorus]\n" +
                        "Han säger \"en låt till\n" +
                        "Sen ska jag sova\"\n" +
                        "Men alla vet hur det där brukar gå\n\n" +
                        "[Chorus]\n" +
                        "Alfred\n" +
                        "Bubblor och ballader\n" +
                        "Skål för alla dina vanor\n" +
                        "Alla små laster\n" +
                        "Från vin i köket till Guinness på baren\n" +
                        "Du skrattar högst åt den sämsta idén\n" +
                        "Alfred\n" +
                        "Alltid i finalen\n" +
                        "Med sång i huvudet och skratt i lokalen\n" +
                        "Du höjer glaset\n" +
                        "Livet i kanalen\n" +
                        "(vilken show igen)\n\n" +
                        "[Bridge]\n" +
                        "Theodor klickar bort sin lön på en skärm\n" +
                        "Alfred sitter bredvid\n" +
                        "Det är deras term\n" +
                        "\"tryck en gång till\" och skrattet tar slut\n" +
                        "När siffrorna sjunker\n" +
                        "Men kvällen tar spjut\n\n" +
                        "[Chorus]\n" +
                        "Alfred\n" +
                        "Bubblor och ballader\n" +
                        "Skål för alla dina vanor\n" +
                        "Alla små laster\n" +
                        "Från vin i köket till Guinness på baren\n" +
                        "Du skrattar högst åt den sämsta idén\n" +
                        "Alfred\n" +
                        "Alltid i finalen\n" +
                        "Med sång i huvudet och skratt i lokalen\n" +
                        "Du höjer glaset\n" +
                        "Livet i kanalen\n" +
                        "(det blir bra igen, oh)\n" +
                        "Alfred\n" +
                        "Bubblor och ballader\n" +
                        "Sjung din roll igen",
    'Gamla Uncs på G' : "[Verse 1]\n" +
                        "Anton\n" +
                        "Alex\n" +
                        "Lucas\n" +
                        "Alla är uncs\n" +
                        "Sitter där och pustar som tre gamla punks\n" +
                        "Alex upp i skogen\n" +
                        "Tappar bort sin sko\n" +
                        "Tar en liten paus med sin Pripps blå och ro\n\n" +
                        "[Chorus]\n" +
                        "Gamla\n" +
                        "Gamla\n" +
                        "Gamla uncs på G\n" +
                        "Klagar på sin rygg men ska alltid med\n" +
                        "Dom är supergamla\n" +
                        "Det är deras grej\n" +
                        "Anton\n" +
                        "Alex\n" +
                        "Lucas\n" +
                        "Åh vad gamla ni blev (ey!)\n\n" +
                        "[Verse 2]\n" +
                        "Lucas sprayar parfym\n" +
                        "Känner sig så fin\n" +
                        "Snackar om Wild north\n" +
                        "Dricker kallt till sin rutin\n" +
                        "Anton tar siesta\n" +
                        "Mitt på ljusa dan\n" +
                        "Går runt med liten käpp\n" +
                        "Född nollsexa\n" +
                        "Fattar han?\n\n" +
                        "[Chorus]\n" +
                        "Gamla\n" +
                        "Gamla\n" +
                        "Gamla uncs på G\n" +
                        "Klagar på sin rygg men ska alltid med\n" +
                        "Dom är supergamla\n" +
                        "Det är deras grej\n" +
                        "Anton\n" +
                        "Alex\n" +
                        "Lucas\n" +
                        "Åh vad gamla ni blev (så gamla)\n\n" +
                        "[Bridge]\n" +
                        "Fika klockan fyra\n" +
                        "Samma bord\n" +
                        "Same plats\n" +
                        "Kex\n" +
                        "Kakor\n" +
                        "Kaffe\n" +
                        "Lite magkatarr i sats\n" +
                        "Dom säger \"vi är unga\" men alla bara ler\n" +
                        "För varje litet steg låter som ett helt gevär (aj)\n\n" +
                        "[Chorus]\n" +
                        "Gamla\n" +
                        "Gamla\n" +
                        "Gamla uncs på G\n" +
                        "Klagar på sin rygg men ska alltid med\n" +
                        "Dom är supergamla\n" +
                        "Det är deras grej\n" +
                        "Anton\n" +
                        "Alex\n" +
                        "Lucas\n" +
                        "Åh vad gamla ni blev (ey!)\n" +
                        "Anton\n" +
                        "Alex\n" +
                        "Lucas\n" +
                        "Världens äldsta gäng (åh yeah)",
    'Mustaschen och Koden' : "[Verse 1]\n" +
                        "Emil jobbar kväll på Koop\n" +
                        "Blippar varje grönsak snabbt\n" +
                        "Skärm och scanner\n" +
                        "Fokus topp\n" +
                        "Kod i huv'et\n" +
                        "Allt går knappt\n" +
                        "Johan glider in så stolt\n" +
                        "Skjorta uppknäppt\n" +
                        "Leendet brett\n" +
                        "Mustaschen ligger helt i volt\n" +
                        "Bror\n" +
                        "Jag ska laga värsta rätten (hey!)\n\n" +
                        "[Chorus]\n" +
                        "Dom två träffas på Koop idag\n" +
                        "Hyllorna fulla\n" +
                        "Plånbok och ett skratt så vag\n" +
                        "Emil räknar varor\n" +
                        "Johan drömmer sås\n" +
                        "Mustaschen och koden\n" +
                        "Samma kaos\n" +
                        "Dom två träffas på Koop ikväll\n" +
                        "Mitt bland mjölk och pasta känns allt helt speciellt\n" +
                        "En som hackar grönsaker\n" +
                        "En som hackar kod\n" +
                        "Samma gata\n" +
                        "Samma glada mod\n\n" +
                        "[Verse 2]\n" +
                        "Vad ska du laga? Emil ler\n" +
                        "Johan svarar: Nå't med vitlök\n" +
                        "Mycket mer\n" +
                        "Plockar tomat\n" +
                        "Plockar färsk basilika\n" +
                        "den här blir magi\n" +
                        "Jag bara vet\n" +
                        "Jag bara kan\n" +
                        "Emil tipsar tyst om en ny kryddhylla\n" +
                        "testa den där\n" +
                        "Den får grytan att gunga till\n" +
                        "Kön står still men tiden går fort\n" +
                        "I kassans ljus känns vardagen stort (oh yeah)\n\n" +
                        "[Chorus]\n" +
                        "Dom två träffas på Koop idag\n" +
                        "Hyllorna fulla\n" +
                        "Plånbok och ett skratt så vag\n" +
                        "Emil räknar varor\n" +
                        "Johan drömmer sås\n" +
                        "Mustaschen och koden\n" +
                        "Samma kaos\n" +
                        "Dom två träffas på Koop ikväll\n" +
                        "Mitt bland mjölk och pasta känns allt helt speciellt\n" +
                        "En som hackar grönsaker\n" +
                        "En som hackar kod\n" +
                        "Samma gata\n" +
                        "Samma glada mod\n\n" +
                        "[Bridge]\n" +
                        "beat droppar mjukt\n" +
                        "Handklappar in\n" +
                        "Sen kanske dom ses efter stängning en gång\n" +
                        "Johan tar med mat\n" +
                        "Emil bjuder på sitt kodspråk\n" +
                        "Två världar blandas runt köksbordets kant\n" +
                        "Mat och logik\n" +
                        "Samma långa band\n\n" +
                        "[Chorus]\n" +
                        "Dom två träffas på Koop idag\n" +
                        "Hyllorna fulla\n" +
                        "Plånbok och ett skratt så vag\n" +
                        "Emil räknar varor\n" +
                        "Johan drömmer sås\n" +
                        "Mustaschen och koden\n" +
                        "Samma kaos\n" +
                        "Dom två träffas på Koop ikväll\n" +
                        "Mitt bland mjölk och pasta känns allt helt speciellt\n" +
                        "En som hackar grönsaker\n" +
                        "En som hackar kod\n" +
                        "Samma gata\n" +
                        "Samma glada mod",
    'Hetast i Spelet' : "[Verse 1]\n" +
                        "Max i loggen\n" +
                        "Han är inne igen\n" +
                        "Dubblar marker\n" +
                        "Han är kall i sitt game\n" +
                        "Snus under läppen\n" +
                        "Öl på bordet bredvid\n" +
                        "Skrattar åt förlust\n" +
                        "Han jagar nästa liv\n\n" +
                        "Skjorta uppknäppt\n" +
                        "Kedja tung över bröst\n" +
                        "Klickar på insats\n" +
                        "Känner brännan i röst\n" +
                        "Alla vill va med\n" +
                        "Men få tål hans fart\n" +
                        "Han leker med marginaler som om allt är klart\n\n" +
                        "[Chorus]\n" +
                        "Max är het\n" +
                        "Hetast i spelet (ey)\n" +
                        "Flippade noll till hundra på en kväll\n" +
                        "Skum i glaset\n" +
                        "Snus under läppen (yeah)\n" +
                        "Sitter vid bordet som om det här är hans hotell\n\n" +
                        "Max är het\n" +
                        "Hetast i spelet (aa)\n" +
                        "Skratt när siffrorna snurrar runt igen\n" +
                        "Öl efter öl\n" +
                        "Festen i steget\n" +
                        "Alla vet\n" +
                        "Alla vet – Max är renodlat problem\n\n" +
                        "[Verse 2]\n" +
                        "Solbrillor inne\n" +
                        "Blick som säger \"mer\"\n" +
                        "Ingen ser hans nerver\n" +
                        "Bara hur han ler\n" +
                        "Klirr i fickan\n" +
                        "Sedlar vikt i hans hand\n" +
                        "Samma jacka varje natt\n" +
                        "Den luktar vinst och brand\n\n" +
                        "Knappen lyser rött\n" +
                        "Ändå trycker han grön\n" +
                        "Spelar sista kronan som om allt är lön\n" +
                        "Kompisar runt bordet skriker ut hans namn (Max!)\n" +
                        "När han plockar hem potten med den sjukaste hand\n\n" +
                        "[Chorus]\n" +
                        "Max är het\n" +
                        "Hetast i spelet (ey)\n" +
                        "Flippade noll till hundra på en kväll\n" +
                        "Skum i glaset\n" +
                        "Snus under läppen (woah)\n" +
                        "Sitter vid bordet som om det här är hans hotell\n\n" +
                        "Max är het\n" +
                        "Hetast i spelet (aa)\n" +
                        "Skratt när siffrorna snurrar runt igen\n" +
                        "Öl efter öl\n" +
                        "Festen i steget\n" +
                        "Alla vet\n" +
                        "Alla vet – Max är renodlat problem\n\n" +
                        "[Bridge]\n" +
                        "Beatet droppar ner\n" +
                        "Bara bas och klapp\n" +
                        "Max i baren\n" +
                        "Skakar hand med turen (ey)\n" +
                        "Slår en bärs i ett\n" +
                        "Sen till bordet med djuren\n" +
                        "Munnen full av snus\n" +
                        "Men han snackar cash\n" +
                        "Ögonen är röda\n" +
                        "Men hans fokus är bransch\n\n" +
                        "[Chorus]\n" +
                        "Max är het\n" +
                        "Hetast i spelet (ey)\n" +
                        "Flippade noll till hundra på en kväll\n" +
                        "Skum i glaset\n" +
                        "Snus under läppen (yeah)\n" +
                        "Sitter vid bordet som om det här är hans hotell\n\n" +
                        "Max är het\n" +
                        "Hetast i spelet (aa)\n" +
                        "Skratt när siffrorna snurrar runt igen\n" +
                        "Öl efter öl\n" +
                        "Festen i steget\n" +
                        "Alla vet\n" +
                        "Alla vet – Max är renodlat problem",
    'Dalahästarna' : "[Verse 1]\n" +
                        "Edvin vaknar sent i Fagersta\n" +
                        "Föreläsning klockan nio\n" +
                        "Han ba: \"nä\"\n" +
                        "Tröjan röd\n" +
                        "Nummer tio på ryggen\n" +
                        "Han snackar mer om bänken än om pluggen\n\n" +
                        "Han tar tåget in men hoppar av för tidigt\n" +
                        "\"en öl på vägen hem\n" +
                        "Det är rimligt\"\n" +
                        "På bordet står det redan en armé\n" +
                        "Små röda hästar som glor och ler\n\n" +
                        "[Chorus]\n" +
                        "Edvin och dalahästarna\n" +
                        "Rad efter rad på hans fönsterbräda\n" +
                        "Han skålar mot tv:n när United spelar bra\n" +
                        "\"en till\n" +
                        "En till\" ropar dalahästarna\n" +
                        "Edvin och dalahästarna\n" +
                        "Vaktar hans drömmar när han borde plugga klart\n" +
                        "Han skrattar\n" +
                        "\"jag tar det sen\n" +
                        "Jag svär\"\n" +
                        "Med dalahästar överallt där han är\n\n" +
                        "[Verse 2]\n" +
                        "Föreläsern skriver \"var är du idag?\"\n" +
                        "Edvin skriver \"ute och jagar vardagslag\"\n" +
                        "Fast han jagar bara kvitton från puben\n" +
                        "Och glömda jackor som hänger kvar på klubben\n\n" +
                        "I hallen står en häst med halsduk knuten\n" +
                        "I lagets färger\n" +
                        "Han kallar den kapten\n" +
                        "I köket stegrar femton till mot ljuset\n" +
                        "Som om de ropar: \"vi tar dig hem igen\"\n\n" +
                        "[Chorus]\n" +
                        "Edvin och dalahästarna\n" +
                        "Rad efter rad på hans fönsterbräda\n" +
                        "Han skålar mot tv:n när United spelar bra\n" +
                        "\"en till\n" +
                        "En till\" ropar dalahästarna\n" +
                        "Edvin och dalahästarna\n" +
                        "Vaktar hans drömmar när han borde plugga klart\n" +
                        "Han skrattar\n" +
                        "\"jag tar det sen\n" +
                        "Jag svär\"\n" +
                        "Med dalahästar överallt där han är\n\n" +
                        "[Bridge]\n" +
                        "En dag kanske han går på allt han missat\n" +
                        "Föreläsning\n" +
                        "Seminarium\n" +
                        "Hela listan\n" +
                        "Men ikväll fyller han köksbordet igen\n" +
                        "Med fler små hästar och en sista vän\n\n" +
                        "[Chorus]\n" +
                        "Edvin och dalahästarna\n" +
                        "Rad efter rad på hans fönsterbräda\n" +
                        "Han skålar mot tv:n när United spelar bra\n" +
                        "\"en till\n" +
                        "En till\" ropar dalahästarna\n" +
                        "Edvin och dalahästarna\n" +
                        "Vaktar hans drömmar när han borde plugga klart\n" +
                        "Han tänker: \"livet är väl till för sånt här\"\n" +
                        "Med dalahästar överallt där han är",
    'Hyllning till Bridgens' : "Vi satt där sent med skratt i varje rad\n" +
                        "En öl i handen, och hjärtat lite glad\n" +
                        "Sångboken öppen, vi sjöng fast vi var skeva\n" +
                        "Det var kvällar man aldrig ville leva utan leva\n\n" +
                        "Ljuset varmt, och bordet fullt av folk\n" +
                        "Skål för vänskap, skål för varje tolk\n" +
                        "Gamla visor, nya minnen som vi spar\n" +
                        "Under taket där tiden stannar kvar\n\n" +
                        "[Chorus]\n" +
                        "Åh Bridgens Hus, jag vill tillbaka dit\n" +
                        "Där natten var ung och livet var fritt\n" +
                        "Vi sjöng tills rösten brann i varje vers\n" +
                        "Med öl i handen och hjärtat i en fest\n\n" +
                        "Åh Bridgens Hus, där skrattet aldrig tog slut\n" +
                        "Vi lovade vi skulle komma hit igen nån minut\n" +
                        "När världen känns grå och dagen känns för lång\n" +
                        "Vill jag tillbaka till vår sång\n\n" +
                        "[Vers]\n" +
                        "Sittningens bord, blev till vin\n" +
                        "Gamla skämt som aldrig riktigt gick i försvinn\n" +
                        "Vi slog i glasen, någon tappade sin plan\n" +
                        "Men där och då var livet bara fan så skönt ändå ibland\n\n" +
                        "[Bridge]\n" +
                        "Ta mig tillbaka till kvällen som var vår\n" +
                        "När tiden stod still och sorgen gick att spå\n" +
                        "För mellan sångerna och skrattens brus\n" +
                        "Finns alltid platsen som vi kallar Bridgens Hus\n\n" +
                        "[Chorus]\n" +
                        "Åh Bridgens Hus, jag vill tillbaka dit\n" +
                        "Där natten var ung och livet var fritt\n" +
                        "Vi sjöng tills rösten brann i varje vers\n" +
                        "Med öl i handen och hjärtat i en fest\n\n" +
                        "Åh Bridgens Hus, där skrattet aldrig tog slut\n" +
                        "Vi lovade vi skulle komma hit igen nån minut\n" +
                        "När världen känns grå och dagen känns för lång\n" +
                        "Vill jag tillbaka till vår sång"
};

// Knappar
const playbtn : HTMLElement | null = document.getElementById("Play_Pause");
const previousbtn : HTMLElement | null = document.getElementById("Previous");
const skipbtn : HTMLElement | null = document.getElementById("Skip");
const play2 : HTMLElement | null = document.getElementById("Play");
const current : HTMLElement | null = document.getElementById("current");
const queuebtn : HTMLElement | null = document.getElementById("Queue");
const activeq : HTMLElement | null = document.getElementById("q");
const shufflebtn : HTMLElement | null = document.getElementById("Shuffle");
const playing : HTMLElement | null = document.getElementById("playing");
const box : HTMLElement | null = document.getElementById("lyrics-box");

// Artister och deras musikcontainers
const albantheobtn : HTMLElement | null = document.getElementById("albantheo"); //knappen för att visa albantheos musik
const albanmusik :  HTMLElement | null = document.getElementById("albanmusik"); //containern för musiken som vi togglar synligheten på
const countrytheobtn : HTMLElement | null = document.getElementById("countrytheo"); // --||--
const countrymusik : HTMLElement | null = document.getElementById("countrymusik"); 
const rocktheobtn : HTMLElement | null = document.getElementById("rocktheo"); // --||--
const rockmusik : HTMLElement | null = document.getElementById("rockmusik");
const poptheobtn : HTMLElement | null = document.getElementById("poptheo"); // --||--
const popmusik : HTMLElement | null = document.getElementById("popmusik");
const stockholmstheobtn : HTMLElement | null = document.getElementById("stockholmstheo");
const stockholmsmusik : HTMLElement | null = document.getElementById("stockholmsmusik");
// Låtar
const SONGS : Record<string, string> = { // Avänds inte längre men står kvar utifall vi skulle göra om senare
    'Albanian Bartender': './music/albanian_music/Albanian Bartender.mp3',
    'Omen in The Lords church': './music/freaky_country/Omen In The Lords Church.mp3',
    'City Mail Special Delivery': './music/country/City Mail Special Delivery.mp3',
    'Gustav Got a boyfriend': './music/country/Gustav Got a Boyfriend.mp3',
    'Red Eagle, Gold Chain': './music/albanian_music/Gold Chain, Red Eagle.mp3',
    'Sun-Kissed in Albania': './music/albanian_music/Sun-Drunk in Albania.mp3',
    'Bror Henke' : './music/stockholm/Bror Henke.mp3', 
    'Filthy Halo' : './music/Rock/Filthy Halo.mp3',
    'Russian Bathhouse' : './music/Rock/Russian Bathhouse.mp3'

};

let q : Queue<string> = empty();
function play_song(path: string, name : string): void {
    const absolutePath = new URL(path, location.href).href;
    playing ? playing.textContent = name : undefined;
    // Om ingen låt spelas -> skapa och spela
    if (!current_song) {
        current_song = new Audio(absolutePath);
        current_song.onended = () => { // Eventhandler för att spela upp en ny låt när den gamla är slut
            skip();
        }
        current_song.play();
        showLyricsFor(name);
        if(playbtn !== null){
            playbtn.textContent="PAUSE";
        }
        
        return;
    }

    // Om det är en ny låt -> Byt
    if (current_song.src !== absolutePath) {
        current_song.pause();
        current_song = new Audio(absolutePath);
        current_song.onended = () => { // Eventhandler för att spela upp en ny låt när den gamla är slut
            skip();
        }

        current_song.play();
        showLyricsFor(name);

        return;
    } else{
        current_song.currentTime = 0;
        return;
    }
    

}

function Play_Pause(): void{ // Pause/play funktionen
    if(current_song){
        if(current_song.paused) {
            current_song.play();

            

        playbtn ? playbtn.textContent="PAUSE" : undefined;
        } 
        else {
        current_song.pause();
        playbtn ? playbtn.textContent="PLAY" : undefined;
        }
    }
}

function skip(): void{ // Avslutar nuvarande låt och spelar upp nästa ur kön
    if(is_empty(q)){
        playbtn ? playbtn.textContent="PLAY": undefined;

    }
    play_song(head(q), queuearray[0]); 
    dequeue(q);
    queuearray = rebuild_array(queuearray);
    display_queue();
    if(is_empty(q)) {
        canqueue = false;
    }
}

function previous() : void{ // Starta om låten, kopplat till tillbakaknappen
    current_song ? current_song.currentTime = 0: undefined;
}

function toggle_hide(artist : HTMLElement) : void{ // Gömmer/visar element, används för att dölja/visa artisters musik
    if(artist.style.visibility === "visible"){
        artist.style.visibility = "hidden";
        artist.style.height = "1px";
    }
    else {
        artist.style.height = "auto";
        artist.style.visibility = "visible";
    }
}

function add_to_queue(song_path: string, title : string) { 
    if (!current_song) {    // Om ingen låt finns alls
        play_song(song_path, title);
    } else if (current) { //queuea om låten spelas
        enqueue(song_path, q);
        queuearray.push(current?.textContent!.trim());
        display_queue();
    } 
}

function display_queue(){ //visar 
    let tmp : string = " ";
    for(let i = 0; i <= queuearray.length - 1; i++) {
        tmp = tmp + queuearray[i] + '\n' ;
    }
    activeq ? activeq.textContent = tmp : undefined;
}

function rebuild_array(origin: Array<string>) : Array<string> { // Hjälpfunktion för att ta bort första elementet i en array
    let tmp : Array<string> = [];

    for(let i = 1; i < origin.length; i++) {
        tmp[i-1] = origin [i];
    }

    return tmp;
}
// Fisher–Yates‑shuffle
function shuffle_array<T>(arr: Array<T>): Array<T> {
    let a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function shuffle_queue() : void{    
    // shuffla arrayen
    queuearray = shuffle_array(queuearray);
    // se till att queuen matchar
    let tmp: Queue<string> = empty();
    for( let i = 0; i < queuearray.length; i++){
        enqueue(SONGS[queuearray[i]], tmp);
    }
    q = tmp;
    display_queue();
}

document.querySelectorAll(".music").forEach(btn => { 
    btn.addEventListener("click", () => {
        const songName = btn.getAttribute("data-song")!;
        active_selection = songName;
        current ? current.textContent = btn.textContent : undefined;
    });
});

// Eventlisteners för knapparna

if(playbtn !== null) { // Playbuttons funktion
    playbtn.addEventListener("click", () => 
        { Play_Pause();
        if(current_song ? current_song.paused: undefined) {
            playbtn.textContent="PLAY";
        }
        else {
            playbtn.textContent="PAUSE";
        };
        }
    );
}

previousbtn ? previousbtn.addEventListener("click", () => {previous()}) : undefined;

skipbtn ? skipbtn.addEventListener("click", () => {skip()}) : undefined;

if(albantheobtn !== null && albanmusik !== null){
    albantheobtn.addEventListener("click", () => {toggle_hide(albanmusik)});
    toggle_hide(albanmusik);
}

if(countrytheobtn !== null && countrymusik !== null){
    countrytheobtn.addEventListener("click", () => {toggle_hide(countrymusik)}); 
    toggle_hide(countrymusik);
}

if(rocktheobtn !== null && rockmusik !== null){
    rocktheobtn.addEventListener("click", () => {toggle_hide(rockmusik)});
    toggle_hide(rockmusik);
}

if(poptheobtn !== null && popmusik !== null){
    poptheobtn.addEventListener("click", () => {toggle_hide(popmusik)});
    toggle_hide(popmusik);
}

if(stockholmstheobtn !== null && stockholmsmusik !== null){
    stockholmstheobtn.addEventListener("click", () => {toggle_hide(stockholmsmusik)});
    toggle_hide(stockholmsmusik);
}

shufflebtn?.addEventListener("click", () => { shuffle_queue();});

play2 ? play2.addEventListener("click", () => {
    play_song(active_selection, current ? current?.textContent!.trim() : "error");
    canqueue = true;
}) : undefined;

queuebtn ? queuebtn.addEventListener("click", () => {add_to_queue(active_selection, current_title)}): undefined;

function showLyricsFor(songId: string) {
    if (!box) return;
    box.textContent = lyrics[songId];
}




// Hela queuesystemet från /lib men copypasteat in här eftersom websidan inte låter oss använda imports/exports
/**
 * A homogeneous queue.
 * The first entry points to the index of the queue's head element,
 * the second entry points to the next empty index of the queue, and
 * the last entry holds the values (contents) of the queue.
 * @template T type of all queue elements
 */
 type Queue<T> = [number, number, Array<T>];

/**
 * Constructs a queue without any elements.
 * @template T type of all queue elements
 * @returns Returns an empty queue.
 */
 function empty<T>(): Queue<T> {
    return [0, 0, []];
}

/**
 * Checks whether a queue is empty.
 * @template T type of all queue elements
 * @param q queue to check for emptiness
 * @returns Returns true, if the queue q has elements, false otherwise.
 */
 function is_empty<T>(q: Queue<T>): boolean {
    return q[0] === q[1];
}

/**
 * Adds an element to the queue.
 * @template T type of all queue elements
 * @param e element to add
 * @param q queue to modify
 * @modifies q by adding element e to the end
 */
 function enqueue<T>(e: T, q: Queue<T>): void {
    const tail_index = q[1];
    q[2][tail_index] = e;
    q[1] = tail_index + 1;  // update tail index
}

/**
 * Retrieves the first element of the queue.
 * @precondition Assumes q to be non-empty
 * @template T type of all queue elements
 * @param q queue to get the first element of
 * @returns Returns the element of the queue that was enqueued first.
 */
 function head<T>(q: Queue<T>): T {
    const head_index = q[0];
    return q[2][head_index];
}

/**
 * Removes the first element of a queue.
 * @precondition Assumes q to be non-empty
 * @template T type of all queue elements
 * @param q queue to remove the element from
 * @modifies q such that the element that was enqueued first is removed
 */
 function dequeue<T>(q: Queue<T>): void {
    const head_index = q[0];
    q[0] = head_index + 1;
}


