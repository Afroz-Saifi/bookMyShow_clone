const movie = [
      {
          "title": "I Am Legend",
          "Genre": "Drama, Horror, Sci-Fi",
          "description": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      },
      {
          "title": "The Avengers",
          "Genre": "Action, Sci-Fi, Thriller",
          "Director": "Joss Whedon",
          "description": "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
          "Poster": "https://w0.peakpx.com/wallpaper/551/479/HD-wallpaper-avengers-poster-avengers-poster-marvels-super-hero-superhero-the-avengers.jpg",
      },
      {
          "title": "Power",
          "Genre": "Crime, Drama",
          "description": "James \"Ghost\" St. Patrick, a wealthy New York night club owner who has it all, catering for the city's elite and dreaming big, lives a double life as a drug kingpin.",
          "Poster": "data:image/jpeg;base64,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",
      },
      {
          "title": "Finding 'Ohana",
          "description": "Two Brooklyn siblings' summer in a rural Oahu town takes an exciting turn when a journal pointing to long-lost treasure sets them on an adventure, leading them to reconnect with their Hawaiian heritage.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZjk2NDhmNDgtNzQ2ZS00YzU1LTljNjgtY2ZjM2M3OTVlNTljXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      },
      {
          "title": "Joker",
          "description": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
          "Poster": "https://c4.wallpaperflare.com/wallpaper/343/846/438/joker-2019-movie-joker-joaquin-phoenix-men-makeup-hd-wallpaper-preview.jpg",
      },
      {
          "title": "Jumanji: The Next Level",
          "description": "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      },
      {
          "title": "Terminator: Dark Fate",
          "description": "Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.",
          "Poster": "https://stat4.bollywoodhungama.in/wp-content/uploads/2019/11/Terminator-Dark-Fate-English.jpg",
      },
      {
          "title": "Narcos",
          "Genre": "Biography, Crime, Drama",
          "description": "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
          "Poster": "https://c4.wallpaperflare.com/wallpaper/602/928/953/drugs-money-bullet-narcos-hd-wallpaper-preview.jpg",
      },
      {
          "title": "Bloodshot",
          "description": "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
          "Poster": "https://w0.peakpx.com/wallpaper/390/380/HD-wallpaper-bloodshot-2020-8k-bloodshot-movies-2020-movies-vin-diesel.jpg",
      },
      {
          "title": "Kong: Skull Island",
          "description": "Explore the mysterious and dangerous home of the king of the apes as a team of explorers ventures deep inside the treacherous, primordial island.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMWUxNjZiNTAtZmMwMi00MmYxLTkxZGEtZWE1MzU0OWFjOTNhXkEyXkFqcGdeQXVyNzk1MzI3MTI@._V1_.jpg",
      },
      {
          "title": "Palmer",
          "description": "After 12 years in prison, former high school football star Eddie Palmer returns home to put his life back together—and forms an unlikely bond with Sam, an outcast boy from a troubled home. But Eddie's past threatens to ruin his new life and family.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYTZhNzM4MDktYWUwMC00NTE1LTlkN2UtM2Y5ODIwYjZmNTA2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      },
      {
          "title": "Underwater",
          "description": "After an earthquake destroys their underwater station, six researchers must navigate two miles along the dangerous, unknown depths of the ocean floor to make it to safety in a race against time.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZTc2YWEyN2UtZjFlNy00MDFlLWFmYmMtYTA3ZWY1ZmU5MmFiXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
      },
      {
          "title": "Greenland",
          "description": "John Garrity, his estranged wife and their young son embark on a perilous journey to find sanctuary as a planet-killing comet hurtles toward Earth. Amid terrifying accounts of cities getting levelled, the Garrity's experience the best and worst in humanity. As the countdown to the global apocalypse approaches zero, their incredible trek culminates in a desperate and last-minute flight to a possible safe haven.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMzcyMzU4MDUtM2JhOC00ZDg2LTg5MGMtZjc2OGMyMjhlMGE2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      },
      {
          "title": "The New Mutants",
          "description": "Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZDQ2NTdmNDgtMGIwMS00ODE2LTk5M2EtZGZhYzc4MWRlNTU3XkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_.jpg",
      },
      {
          "title": "Avengers: Infinity War",
          "description": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
          "Poster": "https://parodyempire.com/flix/wp-content/uploads/2020/08/Watch-Avengers-Infinity-War-Movie-Cover.jpg",
      },
      {
          "title": "Doctor Strange",
          "Genre": "Action, Adventure, Fantasy",
          "description": "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
          "Poster": "data:image/jpeg;base64,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",
      },
      {
          "title": "Toxico",
          "description": "In the middle of a mysterious insomnia epidemic that slowly takes on catastrophic dimensions, Laura (39) and Augusto (42) flee the city in their motorhome to get away from the chaos. As they move down the route, the world becomes an increasingly strange and dangerous place. Finally, Laura reveals a story that changes everything. The road is depopulating, the silence grows and it is increasingly difficult to differentiate the reality from the dream.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNGE4MWE3ZDgtNGIzMy00MDk1LWE4NWYtMDkwYWRkY2FjMTBkXkEyXkFqcGdeQXVyMTIzNTI5NTM1._V1_.jpg",
      },
      {
          "title": "Bajocero",
          "description": "When a prisoner transfer van is attacked, the cop in charge must fight those inside and outside while dealing with a silent foe: the icy temperatures.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTEyM2M4N2UtN2U0Yi00Mzg5LWJlNWUtZWUwY2ZlMGIzZGIyXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
      },
      {
          "title": "The Croods: A New Age",
          "description": "Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNGU1NGNiYzYtMTQ2Ni00M2ZlLTg0N2QtMDFhMzNjNzcyMGYyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      },
      {
          "title": "Wolf",
          "description": "Freddy Lupin, heir to a proud family line of werewolves, is in for a shock when on his 14th birthday his first 'warfing' goes awry, turning him into a ferocious poodle. The pack elders give Freddy until the next moonrise to prove he has the heart of a wolf, or risk being cast out forever. With the help of an unlikely ally in a streetwise stray named Batty, Freddy must prove he's 100% Wolf.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMThlNTk3YzMtOTZjMi00M2NiLTg1NTgtYThiYzE2MDFmMDUwXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg",
      },
      {
          "title": "Birds of Prey",
          "description": "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
          "Poster": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/02/birds-of-prey-movie-review-02.jpg",
      },
      {
          "title": "Godzilla",
          "description": "Ford Brody, a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe. Soon, both men are swept up in an escalating crisis when an ancient alpha predator arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      },
      {
          "title": "The SpongeBob Movie: Sponge on the Run",
          "description": "When his best friend Gary is suddenly snatched away, SpongeBob takes Patrick on a madcap mission far beyond Bikini Bottom to save their pink-shelled pal.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOTMyOTAyY2YtNTEyZS00NGEwLTg5YWMtOTBkNmJlYTM0YTc0XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      },
      {
          "title": "Code 8",
          "description": "In Lincoln City, some inhabitants have extraordinary abilities. Most live below the poverty line, under the close surveillance of a heavily militarized police force. Connor, a construction worker with powers, involves with a criminal gang to help his ailing mother.",
          "Poster": "https://w0.peakpx.com/wallpaper/568/497/HD-wallpaper-code-8-code8-movie-scifi.jpg",
      },
      {
          "title": "Legionnaire's Trail",
          "description": "Noreno, a half-Roman, is entrusted with the mission of crossing the snowy mountains of Armenia, swarming with Parthian patrols, to seek help for his slowly dying men.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZjA2MjI5OWMtNWVlNi00MTViLTg2MjktOTExMmExYWFjZDczXkEyXkFqcGdeQXVyNDA1NDA2NTk@._V1_.jpg",
      },
      {
          "title": "Outside the Wire",
          "description": "In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNmM2MWQ0NzktNzU0OS00MjYzLTkxNDYtMzliNTA5ZmNkMmZlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      },
      {
          "title": "Batman: Soul of the Dragon",
          "description": "Bruce Wayne faces a deadly menace from his past, with the help of three former classmates: world-renowned martial artists Richard Dragon, Ben Turner and Lady Shiva.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYmQ4YjZlZjAtYzljOS00ZjViLWE1NGYtMzlmZDZjZTcxYzRiXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_FMjpg_UX1000_.jpg",
      },
      {
          "title": "Rogue One: A Star Wars Story",
          "Genre": "Action, Adventure, Sci-Fi",
          "description": "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
          "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      },
      {
          "title": "Black Water",
          "description": "An adventure-loving couple convince their friends to explore a remote, uncharted cave system in the forests of Northern Australia. With a tropical storm approaching, they abseil into the mouth of the cave, but when the caves start to flood, tensions rise as oxygen levels fall and the friends find themselves trapped. Unknown to them, the storm has also brought in a pack of dangerous and hungry crocodiles.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMzUzOTU1MjEwM15BMl5BanBnXkFtZTcwNjQ3Njk0MQ@@._V1_.jpg",
      },
      {
          "title": "Chaco",
          "description": "In 1934, Bolivia is at war with Paraguay. Liborio and Ticona and other Bolivian indigenous soldiers are lost in the hell of the Chaco, under the commandment of German Captain Kundt. They're looking for the Paraguayan enemy that they haven't seen for months, and that they will never find. They leave together in a search that will make them realize, progressively, the destiny they have been pushed into and the inevitable condition of a defeated troop. They're walking like shadows, wandering forever in the middle of dust and silence.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYzY1NDg3ZGYtYmI4Ny00YWFiLThmZmQtYTdjODc3YWE0Y2Y3XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_.jpg",
      },
      {
          "title": "Extraction",
          "description": "Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDBkOWNiMTYtMjlkZS00NzJlLTg0ZmUtN2YwYWQ3N2I3N2Y0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      },
      {
          "title": "Godzilla: King of the Monsters",
          "description": "Follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species, thought to be mere myths, rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.",
          "Poster": "https://www.themoviedb.org/t/p/original/fQ40gmFM4p03tXwMxQQKh2cCBW4.jpg",
      },
      {
          "title": "Honest Thief",
          "description": "A bank robber tries to turn himself in because he's falling in love and wants to live an honest life...but when he realizes the Feds are more corrupt than him, he must fight back to clear his name.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTViODYxNjItODEwMC00YmFjLTgxMDItZGRkZGYzNjQwMTZmXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg",
      },
      {
          "title": "Sputnik",
          "description": "At the height of the Cold War, a Soviet spacecraft crash lands after a mission gone awry, leaving the commander as its only survivor. After a renowned Russian psychologist is brought in to evaluate the commander’s mental state, it becomes clear that something dangerous may have come back to Earth with him…",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOTI4ZmE4MDUtMTFjOS00NWNkLThkMzgtOTdmYzY4ODhmYTI0XkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_.jpg",
      },
      {
          "title": "The Tax Collector",
          "description": "David Cuevas is a family man who works as a gangland tax collector for high ranking Los Angeles gang members. He makes collections across the city with his partner Creeper making sure people pay up or will see retaliation. An old threat returns to Los Angeles that puts everything David loves in harm’s way.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMmFmZTdhYmItNjIyZS00ZjVlLWFjZjgtMjMyMDA5ZmVjNzE0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      },
      {
          "title": "Breaking Bad",
          "Genre": "Crime, Drama, Thriller",
          "description": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
          "Poster": "https://picfiles.alphacoders.com/102/thumb-102770.jpg",
      },
      {
          "title": "Assassin",
          "description": "When a billionaire gives a group of young scientists unlimited resources to study the science of matter transfer, the scientists unlock the secrets of time travel. But they soon find out that the project is backed by a militant extremist group, and the billionaire plans to go back in time and prove that Jesus never rose from the dead.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjM0MjY4MTk5NV5BMl5BanBnXkFtZTgwNDE2NTQyMzI@._V1_SX300.jpg",
      },
      {
          "title": "Devoto, la invasión silenciosa",
          "description": "Five strangers wake up locked in a strange building. They don't know who took them there or for what purpose. Throughout a night they will discover with surprise that an invasion is taking place outside that complex. And this motley group of strangers, for a reason they will have to figure out, are the ones chosen to try to stop it.",
          "Poster": "https://media-cache.cinematerial.com/p/500x/5ob6cxr3/devoto-la-invasion-silenciosa-argentinian-movie-poster.jpg?v=1588804321",
      },
      {
          "title": "The Little Things",
          "description": "Deputy Sheriff Joe \"Deke\" Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMGYxYzBmODEtZjFjMC00OTEyLWJmNjgtY2VkYTgxMzRkMDJiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      },
      {
          "title": "The Rental",
          "description": "Two couples on an oceanside getaway grow suspicious that the host of their seemingly perfect rental house may be spying on them. Before long, what should have been a celebratory weekend trip turns into something far more sinister.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNjk4OTAyY2ItOTQ4Zi00MTU1LThlYTktNjU4ZjExODhmM2EzXkEyXkFqcGdeQXVyNjgzMjk0OTI@._V1_.jpg",
      },
      {
          "title": "Breach",
          "description": "A hardened mechanic must stay awake and maintain an interstellar ark fleeing the dying planet Earth with a few thousand lucky souls on board... the last of humanity. Unfortunately, humans are not the only passengers. A shapeshifting alien creature has taken residence, its only goal is to kill as many people as possible. The crew must think quickly to stop this menace before it destroys mankind.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOTk1Y2IyYzAtZGVkNC00Y2U3LWE0MWQtN2E3MTE1OTBjN2QyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      },
      {
          "title": "Wonder Woman 1984",
          "description": "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYTlhNzJjYzYtNGU3My00ZDI5LTgzZDUtYzllYjU1ZmU0YTgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
      },
      {
          "title": "Assassin's Creed",
          "Genre": "Action, Adventure, Fantasy",
          "description": "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNzE1OTczNTc1OF5BMl5BanBnXkFtZTgwMzgyMDI3MDI@._V1_.jpg",
      },
      {
          "title": "Soul",
          "description": "Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",
          "Poster": "https://e0.pxfuel.com/wallpapers/507/724/desktop-wallpaper-pixar-soul-who-is-excited-for-the-new-pixar-movie-soul-fandom-that-very-question-is-the-ethos-behind-disney-and-pixar-s-new-movie-soul-premiering-exclusively-on-disney-thumbnail.jpg",
      },
      {
          "title": "Underground",
          "description": "After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      },
      {
          "title": "Alone",
          "description": "A recently widowed traveler is kidnapped by a cold blooded killer, only to escape into the wilderness where she is forced to battle against the elements as her pursuer closes in on her.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOWFhOTc1MmYtOGYxZS00YTBmLWEwZTYtZTkwZTZmZDM2M2MwXkEyXkFqcGdeQXVyMjQ2NDU3NDY@._V1_.jpg",
      },
      {
          "title": "Ava",
          "description": "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOTI5OWZiYTYtN2Y3ZC00YjM4LTk2YzItZTU2YmEzMThmNTVjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      },
      {
          "title": "Dory's Reef Cam",
          "description": "Dive into the waters below and watch the aquatic wildlife from the world of Nemo and Dory.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMDViNmMwYWUtYjJjMy00MjJmLWJjZDYtNjJiYzdjMTdhM2UxXkEyXkFqcGdeQXVyODQ4MjU1MDk@._V1_.jpg",
      },
      {
          "title": "Dragonheart: Vengeance",
          "description": "Lukas, a young farmer whose family is killed by savage raiders in the countryside, sets out on an epic quest for revenge, forming an unlikely trio with a majestic dragon and a swashbuckling, sword-fighting mercenary, Darius.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZGYzMjk3M2MtZDZlYi00YjhmLWFmMmItYjRiMjk4ZWI2N2Q5XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
      },
      {
          "title": "Fast & Furious Presents: Hobbs & Shaw",
          "description": "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have swapped smacks and bad words. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, both join forces to defeat him. A spin-off of “The Fate of the Furious",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      },
      {
          "title": "Fixed",
          "description": "Allan is a married father of three whose sex life takes another hit when his wife can no longer take the pill. He soon finds himself with an appointment for a vasectomy and a nagging identity crisis. Although he is by all reasonable accounts a good, responsible man, the thought of getting \"fixed\" drives him to lose himself to an action-packed midlife crisis along with his best friends. Allan will refuse to grow up anymore.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZWYwMjJiOTItNzgyNC00OTUyLWFmM2YtODI2OGMwYTFjMTg5XkEyXkFqcGdeQXVyNTU2OTIyMDU@._V1_.jpg",
      },
      {
          "title": "Godzilla vs. Kong",
          "description": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMzk2ZmYxNTUtODlhMi00NzE2LTkwMTctYjg0ODQ1ZjkyNzJmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      },
      {
          "title": "We Can Be Heroes",
          "description": "When alien invaders capture Earth's superheroes, their kids must learn to work together to save their parents - and the planet.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYmU3OGFhZDItMjhlZi00YjQwLWJlOTItYzlhOGEwNGU3NjIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      },
      {
          "title": "Vikings",
          "Genre": "Action, Drama, History",
          "description": "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
          "Poster": "https://w0.peakpx.com/wallpaper/290/26/HD-wallpaper-vikings-ragnar-viking.jpg",
      },
      {
          "title": "Extraction 2",
          "Genre": "Action, Drama, Thriller",
          "description": "After barely surviving the events of the first movie, Hemsworth is back as Australian black-ops gun for hire Tyler Rake, tasked with another deadly mission: rescuing the battered family of a ruthless Georgian gangster from the prison where they're being held.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZjg5MTM4N2QtN2RlMS00NzBlLTg3NDktM2ExZDNmMmExMGU3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      },
      {
          "title": "The Wolf of Wall Street",
          "Genre": "Biography, Comedy, Crime",
          "description": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
      },
      {
          "title": "Gotham",
          "Genre": "Action, Crime, Drama",
          "description": "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
          "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJeU3qUZWtv2oiPuu8DY1e9s-eRAEUd_ncf91-zpogWrNLbiSmHtGzGGLZ_rCtHsBVV0&usqp=CAU",
      },
      {
          "title": "Luke Cage",
          "Genre": "Action, Crime, Drama",
          "description": "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
          "Poster": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/715a2c1f-271d-4dde-af5e-db2733e8fc57/d6010w4-86a7210d-0ceb-4de5-a6e5-0534a90986d4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcxNWEyYzFmLTI3MWQtNGRkZS1hZjVlLWRiMjczM2U4ZmM1N1wvZDYwMTB3NC04NmE3MjEwZC0wY2ViLTRkZTUtYTZlNS0wNTM0YTkwOTg2ZDQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tr4j1pOo1N_dy-m7f-6oTNiNlpWJT-z8t2rVpjUmNWg",
      },
      {
          "title": "Miraculous World: New York, United HeroeZ",
          "description": "During a school field trip, Ladybug and Cat Noir meet the American superheroes, whom they have to save from an akumatised super-villain. They discover that Miraculous exist in the United States too.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOTgxNWU2ZDYtMzc5Ny00NWQyLTg3MzktNmM4MzQ0ZDFiOTdjXkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_FMjpg_UX1000_.jpg",
      },
      {
          "title": "Interstellar",
          "Genre": "Adventure, Drama, Sci-Fi",
          "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          "Poster": "https://w0.peakpx.com/wallpaper/438/840/HD-wallpaper-interstellar-2014-movie-poster.jpg",
      },
      {
          "title": "Mortal Kombat Legends: Scorpion's Revenge",
          "description": "After the vicious slaughter of his family by stone-cold mercenary Sub-Zero, Hanzo Hasashi is exiled to the torturous Netherrealm. There, in exchange for his servitude to the sinister Quan Chi, he’s given a chance to avenge his family – and is resurrected as Scorpion, a lost soul bent on revenge. Back on Earthrealm, Lord Raiden gathers a team of elite warriors – Shaolin monk Liu Kang, Special Forces officer Sonya Blade and action star Johnny Cage – an unlikely band of heroes with one chance to save humanity. To do this, they must defeat Shang Tsung’s horde of Outworld gladiators and reign over the Mortal Kombat tournament.",
          "Poster": "https://w0.peakpx.com/wallpaper/349/258/HD-wallpaper-scorpion-poster-2020-movie-mortal-kombat-legends-scorpions-revenge-mortal-kombat.jpg",
      },
      {
          "title": "Tenet",
          "description": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      },
      {
          "title": "The Doorman",
          "description": "A former Marine turned doorman at a luxury New York City high-rise must outsmart and battle a group of art thieves and their ruthless leader — while struggling to protect her sister's family. As the thieves become increasingly desperate and violent, the doorman calls upon her deadly fighting skills to end the showdown.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYzEwYTQ0NWYtZTVjYS00NGNlLWIwMDctYjA3MDQ4OWNiYjMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      },
      {
          "title": "Bad Boys for Life",
          "description": "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      },
      {
          "title": "The Vast of Night",
          "description": "At the dawn of the space-race, two radio-obsessed teens discover a strange frequency over the airwaves in what becomes the most important night of their lives and in the history of their small town.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMDE5NDlkMGUtZjVmMi00ZDU0LTkxNmEtZjMwYjg1NDM0OTgyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      },
      {
          "title": "Host",
          "description": "Six friends hire a medium to hold a séance via Zoom during lockdown — but they get far more than they bargained for as things quickly go wrong. When an evil spirit starts invading their homes, they begin to realize they might not survive the night.",
          "Poster": "https://cdn.cinematerial.com/p/297x/xd1ubqgw/host-british-movie-poster-md.jpg?v=1608856733",
      },
      {
          "title": "Skylines",
          "description": "When a virus threatens to turn the now earth-dwelling friendly alien hybrids against humans, Captain Rose Corley must lead a team of elite mercenaries on a mission to the alien world in order to save what's left of humanity.",
          "Poster": "https://images8.alphacoders.com/119/1195679.jpg",
      }
  ]



const PVR = [
  {
    "name": "PVR Cinemas Rajnigandha Gold (Logix City Center)",
    "VIP": {
        "price": 310,
        "format": [
            ["K", "#", "#", 19,18,17,16,15,14,13,12,"#","#",11,10,9,8,7,6,5,4,3,2,1],
            ["J", "#", "#", "#", 17,16,15,14,13,12,11,"#","#",10,9,8,7,6,5,4,3,2,1]
        ]
    },
    "Executive": {
        "price": 230,
        "format": [
            ["I", "#", "#", "#",23,22,21,20,19,18,17,16,15,14,"#",13,12,11,10,9,8,7,6,5,4,3,2,1],
            ["H", "#", "#", "#",21,20,19,18,17,16,15,14,13,12,"#",11,10,9,8,7,6,5,4,3,2,1],
            ["G", "#", "#", "#",20,19,18,17,16,15,14,13,12,11,"#",10,9,8,7,6,5,4,3,2,1],
            ["F", "#", "#", "#",20,19,18,17,16,15,14,13,12,11,"#",10,9,8,7,6,5,4,3,2,1],
            ["E", "#", "#", "#",18,17,16,15,14,13,12,11,10,9,"#",8,7,6,5,4,3,2,1],
            ["D", "#", "#", "#",18,17,16,15,14,13,12,11,10,9,"#",8,7,6,5,4,3,2,1]
        ]
    },
    "Normal": {
        "price": 175, 
        "format": [
            ["C", "#", "#", "#",20,19,18,17,16,15,14,13,12,11,"#",10,9,8,7,6,5,4,3,2,1],
            ["B", "#", "#", "#",20,19,18,17,16,15,14,13,12,11,"#",10,9,8,7,6,5,4,3,2,1],
            ["A", "#", "#", "#","#",19,18,17,16,15,14,13,12,11,"#",10,9,8,7,6,5,4,3,2,1]
        ]
    }
  }
]

const bookings = {
  PvrId: "64e36eed62b4a25a37d1ef49",
  date: "Tue Aug 22 2023",
  time: "8:25 PM",
  seat: ["I7", "I6", "M10", "F9", "E8"],
  userId: "64e1fe8a2dc5aa660b1d32ce"
}

const foodBeverage = [
  {
    "category": "POPCORN",
    "title": "Large Tub Salted Popcorn 240g",
    "subtitle": "Large Tub Salted Popcorn (240g | 750 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/2000095_09072021113304.png",
    "price": 590
  },
  {
    "category": "POPCORN",
    "title": "Regular Tub Salted Popcorn 90g",
    "subtitle": "Regular Tub Salted Popcorn (90g | 281 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/2000095_09072021113304.png",
    "price": 430
  },
  {
    "category": "POPCORN",
    "title": "Regular Tub Cheese Popcorn 110g",
    "subtitle": "Regular Tub Cheese Popcorn (110g | 333 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/2000095_09072021113304.png",
    "price": 460
  },
  {
    "category": "POPCORN",
    "title": "Medium Tub Caramel Popcorn 270g",
    "subtitle": "Medium Tub Caramel Popcorn (270g | 904 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/2000095_09072021113304.png",
    "price": 540
  },
  {
    "category": "POPCORN",
    "title": "Regular Tub Caramel Popcorn 180g",
    "subtitle": "Regular Tub Caramel Popcorn (180g | 603 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/2000095_09072021113304.png",
    "price": 460
  },
  {
    "category": "COMBOS",
    "title": "Medium Tub Combo (Cheese)",
    "subtitle": "Medium Tub Cheese Popcorn 165g + 2 Coke 450ml (896 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/2000096_09072021113726.png",
    "price": 1090
  },
  {
    "category": "COMBOS",
    "title": "Regular Tub Combo (Salted)",
    "subtitle": "Regular Tub Salted Popcorn 90g + Coke 450ml (479 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/2000097_09072021113606.png",
    "price": 980
  },
  {
    "category": "COMBOS",
    "title": "Medium Tub Combo (Salted)",
    "subtitle": "Medium Tub Salted Popcorn 135g + 2 Coke 450ml (817 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/2000096_09072021113726.png",
    "price": 1060
  },
  {
    "category": "COMBOS",
    "title": "Family Combo (Salted)",
    "subtitle": "Regular Tub Salted Popcorn 90g + Nachos 180g + 2 Coke 450ml (1252 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/2001259_25042023140924.png",
    "price": 1330
  },
  {
    "category": "COMBOS",
    "title": "Regular Tub Combo (Cheese)",
    "subtitle": "Regular Tub Cheese Popcorn 110g + Coke 450ml (531 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/2000097_09072021113606.png",
    "price": 750
  },
  {
    "category": "COMBOS",
    "title": "Family Combo (Cheese)",
    "subtitle": "Regular Tub Cheese Popcorn 110g + Nachos 180g + 2 Coke 450ml (1304 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/2001259_25042023140924.png",
    "price": 1360
  },
  {
    "category": "COMBOS",
    "title": "Family Combo (Caramel)",
    "subtitle": "Regular Tub Caramel Popcorn 180g + Nachos 180g + 2 Coke 450ml (1573 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/2001259_25042023140924.png",
    "price": 1360
  },
  {
    "category": "COMBOS",
    "title": "Regular Tub Combo (Caramel)",
    "subtitle": "Regular Tub Caramel Popcornl 180g + Coke 450ml (800 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/2000097_09072021113606.png",
    "price": 750
  },
  {
    "category": "COMBOS",
    "title": "Medium Tub Combo (Caramel)",
    "subtitle": "Medium Tub Caramel Popcorn 270g + 2 Coke 450ml (1300 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/2000096_09072021113726.png",
    "price": 1090
  },
  {
    "category": "BEVERAGE",
    "title": "Large Coke 810ml",
    "subtitle": "Large Coke (810ml | 356 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/1020011_17082018145045.png",
    "price": 410
  },
  {
    "category": "BEVERAGE",
    "title": "Regular Coke 540ml",
    "subtitle": "Regular Coke (540ml | 238 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/1020011_17082018145045.png",
    "price": 370
  },
  {
    "category": "BEVERAGE",
    "title": "Medium Coke 675ml",
    "subtitle": "Medium Coke (675ml | 297 Kcal)",
    "image": "https://in.bmscdn.com/fnb/v3/xxhdpi/1020011_17082018145045.png",
    "price": 390
  },
]