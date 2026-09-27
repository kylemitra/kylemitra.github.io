
const MODE = window.APP_MODE || 'pair';

const FLIGHTS = {
  outbound:[
    {date:"Tue Sep 29",from:"JFK",to:"FRA",depart:"16:25",arrive:"06:10 +1",flight:"DE4305",airline:"Condor"},
    {date:"Wed Sep 30",from:"FRA",to:"MUC",depart:"07:15",arrive:"08:15",flight:"DE217",airline:"Condor",layover:"1h 05m in Frankfurt"}
  ],
  pairReturn:[
    {date:"Sun Oct 4",from:"MUC",to:"KEF",depart:"14:05",arrive:"16:00",flight:"FI533",airline:"Icelandair"},
    {date:"Sun Oct 4",from:"KEF",to:"JFK",depart:"~17:00",arrive:"19:20",flight:"FI615",airline:"Icelandair",layover:"1h in Reykjavík"}
  ],
  groupReturn:[
    {date:"Mon Oct 5",from:"MUC",to:"FRA",depart:"09:15",arrive:"10:10",flight:"DE4304",airline:"Condor"},
    {date:"Mon Oct 5",from:"FRA",to:"JFK",depart:"11:40",arrive:"14:25",flight:"DE216",airline:"Condor",layover:"1h 30m in Frankfurt"}
  ]
};

const TRIP = {
  lodging: "Lindwurmstraße 189, 80337 München",
  dates: "Sep 30 – Oct 4",
  travelers: 10,
  souvenirs: [
    {icon:"🎨",name:"Original Munich watercolor",detail:"Best target: Peter Guest's Viktualienmarkt art stall or another signed Old Town original. Look for Marienplatz, Frauenkirche, Viktualienmarkt or Oktoberfest scenes."},
    {icon:"🍺",name:"Official 2026 Oktoberfest collector stein",detail:"More specific to this exact trip than a generic beer mug; the official annual design becomes a dated keepsake."},
    {icon:"🖼️",name:"Official Wiesn poster / print",detail:"Easy to pack flat and tied to the 2026 festival design."},
    {icon:"🎩",name:"Small Tracht accessory",detail:"A hat pin, charivari-style charm or small traditional accessory is more Munich/Bavaria-specific than a generic souvenir."},
    {icon:"☕",name:"Dallmayr coffee or tin",detail:"Compact Munich institution souvenir that is actually useful once you're home."}
  ],
  fixed: [
    ["⚽","Germany vs Serbia","Thu Oct 1 · 20:45 · Allianz Arena"],
    ["🍺","Hofbräu-Festzelt","Fri Oct 2 · 12:00–17:30"],
    ["◼","Dachau Memorial Site","Sat Oct 3 · 09:00"],
    ["🍻","Ochsenbraterei","Sat Oct 3 · 16:30–close"]
  ],
  days: {
    wed: {
      label:"Wednesday · Arrival",
      date:"2026-09-30",
      title:"Land, see Munich, settle in.",
      summary:["Airport → Hbf lockers","Essential Old Town loop","Airbnb check-in + reset","Dinner 🍽️ + cocktails 🍸","Flexible first night"],
      weather:[
        {period:"Morning",time:"09:00",place:"Munich",lat:48.1351,lon:11.5820,fallback:54},
        {period:"Midday",time:"13:00",place:"Munich",lat:48.1351,lon:11.5820,fallback:72},
        {period:"Night",time:"21:00",place:"Munich",lat:48.1351,lon:11.5820,fallback:59}
      ],
      kit:{
        morning:{icon:"👕",title:"Arrival + walking",text:"T-shirt or light long-sleeve, comfortable pants, walking shoes. Keep a light layer easy to reach."},
        midday:{icon:"☀️",title:"Old Town",text:"Likely the warmest part of the day. Short sleeves should be comfortable if the forecast holds."},
        night:{icon:"🧥",title:"Dinner + bars",text:"Add a sweater or light jacket. Wear the nicer casual outfit if doing Pfistermühle/Ory."},
        bring:"Phone, portable charger, sunglasses, light rain shell, water, €20–40 cash, passport/ID. Keep luggage in Hbf lockers until check-in."
      },
      timeline:[
        {time:"08:15",title:"Land at MUC",type:"fixed",text:"Immigration + baggage.",route:"After bags, follow green S-Bahn signs in the airport."},
        {time:"~09:30",title:"Airport → München Hbf",type:"transit",text:"Take whichever comes first: S1 or S8.",route:"Allow about 40–45 min on the train. For the 10-person group, public transit is easier than coordinating multiple cars."},
        {time:"~10:20",title:"Hbf lockers",type:"transit",text:"Store luggage, get €1/€2 coins, then start the day hands-free.",route:"You are now about a 15–20 min walk from Marienplatz."},
        {time:"10:45–14:10",title:"Essential Old Town loop",text:"Karlsplatz → Frauenkirche → Marienplatz/Glockenspiel → Viktualienmarkt → Asamkirche → Hofbräuhaus → Odeonsplatz → Residenz/Hofgarten.",route:"Mostly walking. Eat lunch while moving through the center."},
        {time:"~14:15",title:"Hbf → Airbnb",type:"transit",text:"Collect bags and head south to Lindwurmstraße 189.",route:"Simple luggage route: X6 from Hauptbahnhof Süd toward Poccistraße is about 11 min, then a short walk. With lots of bags, Uber/taxi is a reasonable convenience option."},
        {time:"15:00",title:"Check in",type:"fixed",text:"Drop bags and get settled."},
        {time:"15:30–18:00",title:"Shower + nap + reset",text:"Protect the energy for the rest of the trip."},
        {time:"~19:00",title:"Dinner",text: MODE==='pair' ? "Best slot for a small-group / date-night meal." : "Best open night for a proper group or small-group Munich dinner."},
        {time:"~21:30+",title:"Cocktails",type:"optional",text: MODE==='pair' ? "Zephyr for 2–4; Ory as the polished reservable fallback." : "Split into smaller groups if doing cocktails; Zephyr is tiny, Ory handles a somewhat larger group better."}
      ],
      meals:{
        breakfast:[
          {rank:"Best logistics",name:"Rischart at München Hbf",desc:"Munich bakery institution right where you drop bags.",get:"Coffee + pretzel/croissant or a quick savory breakfast.",q:"Rischart München Hauptbahnhof"},
          {rank:"Best traditional stop",name:"Café Frischhut",desc:"Old-school Munich pastry stop near Viktualienmarkt.",get:"Schmalznudel / Auszogne + coffee.",q:"Cafe Frischhut Munich"},
          {rank:"Most flexible",name:"Viktualienmarkt stalls",desc:"Perfect if 10 people want different things without waiting for one table.",get:"Pretzel, Weißwurst, bakery snack or coffee as you browse.",q:"Viktualienmarkt Munich"}
        ],
        lunch:[
          {rank:"Best group flexibility",name:"Viktualienmarkt",desc:"Everyone can choose independently and regroup quickly.",get:"Local sausage/Leberkäse/pretzel-style lunch; keep it fairly light.",q:"Viktualienmarkt Munich"},
          {rank:"Classic Munich",name:"Hofbräuhaus",desc:"You already need to see the interior, so lunch here is a viable classic option.",get:"Bavarian classic + beer; don't overdo it before the evening.",q:"Hofbräuhaus München"},
          {rank:"Easy café option",name:"Rischart Café am Markt",desc:"Reliable sit-down option beside Viktualienmarkt.",get:"Light lunch, bakery item or Kaiserschmarrn if sharing.",q:"Rischart Café am Markt Munich"}
        ],
        dinner:[
          {rank:"Top quality/local pick",name:"Pfistermühle",desc:"Refined Bavarian food in a historic mill; no tasting menu required.",get:"Choose an à-la-carte regional meat dish or seasonal specialty.",q:"Restaurant Pfistermühle Munich"},
          {rank:"Stylish non-Bavarian",name:"Aimy",desc:"Upscale Southeast Asian option near Odeonsplatz if you want a break from Bavarian food.",get:"Share several starters and pick a Thai/Southeast Asian main.",q:"Aimy Munich"},
          {rank:"Best larger-group Munich feel",name:"Wirtshaus in der Au",desc:"Classic lively Wirtshaus that works well for a Munich group dinner.",get:"Dumplings + Bavarian mains + beer.",q:"Wirtshaus in der Au Munich"},
          {rank:"Large-capacity fallback",name:"Augustiner-Keller",desc:"Historic beer hall/garden that is much more forgiving for a large group.",get:"Roast / schnitzel-style Bavarian food + Augustiner beer.",q:"Augustiner-Keller Munich"}
        ]
      }
    },
    thu:{
      label:"Thursday · Alps + Match",
      date:"2026-10-01",
      title: MODE==='pair' ? "Munich tourist day, then Allianz Arena." : "Split day: Alps or Munich, then the match.",
      summary: MODE==='pair'
 ? ["Nymphenburg Palace","BMW Welt + Olympiapark","Souvenir dash + art hunt","Dinner in central Munich","Germany–Serbia at 20:45"]
 : ["Split: Eibsee road trip OR Munich tourist day","Meet back in Munich by ~17:30","Dinner before the match","Germany–Serbia at 20:45"],
      weather:[
        {period:"Morning",time:"09:00",place:"Munich",lat:48.1351,lon:11.5820,fallback:55},
        {period:"Midday",time:"13:00",place:"Munich",lat:48.1351,lon:11.5820,fallback:69},
        {period:"Night",time:"21:00",place:"Munich",lat:48.1351,lon:11.5820,fallback:61}
      ],
      weatherEibsee:[
        {period:"Morning",time:"09:00",place:"Eibsee",lat:47.4565,lon:10.9740,fallback:48},
        {period:"Midday",time:"13:00",place:"Eibsee",lat:47.4565,lon:10.9740,fallback:60},
        {period:"Evening",time:"17:00",place:"Drive back",lat:47.8,lon:11.2,fallback:58}
      ],
      kit:{
        morning:{icon:"🏰",title: MODE==='pair' ? "Nymphenburg" : "Choose your branch",text: MODE==='pair' ? "Comfortable city layers and walking shoes. A light sweater is enough for the morning." : "Munich stayers: normal city layers. Eibsee drivers: add a warm layer and waterproof shell."},
        midday:{icon:"🚗",title: MODE==='pair' ? "BMW / city sightseeing" : "Munich or Alps",text: MODE==='pair' ? "Likely warmer by midday; a shirt + light layer is enough." : "Munich stayers can shed a layer. Eibsee group should keep the mountain layer handy."},
        night:{icon:"⚽",title:"Match",text:"Casual layers are fine; add a Germany shirt/scarf if you have one."},
        bring: MODE==='pair' ? "Phone, portable charger, sunglasses, match tickets, ID, water, and room in your bag for souvenirs." : "Everyone: phone, charger, match tickets, ID. Eibsee group also needs water, warm layer and waterproof shell."
      },
      timelineMunich:[
        {time:"~08:15",title:"Breakfast in Munich",text:"Use one of the breakfast choices below before starting sightseeing."},
        {time:"~09:00",title:"Airbnb → Nymphenburg Palace",type:"transit",text:"Head west for a Munich landmark not covered on Wednesday.",route:"Easy route: walk to Poccistraße → X6 to Hauptbahnhof Süd → tram 16/17 toward Schloss Nymphenburg. Allow roughly 40–45 min door-to-palace."},
        {time:"09:45–11:45",title:"Nymphenburg Palace + grounds",text:"Tour the palace interior and spend some time in the park.",route:"Palace and museums are open 09:00–18:00 on Oct 1. Optional: Marstallmuseum if you want more royal-history content."},
        {time:"~11:45–12:30",title:"Nymphenburg → lunch",type:"transit",text:"Move toward Maxvorstadt/Olympiapark and pick a lunch option below."},
        {time:"13:00–15:15",title:"BMW Welt + BMW Museum + Olympiapark",text:"BMW Welt is free; add the museum if you want the deeper history/collection. Walk a short loop through Olympiapark while you're there.",route:"BMW Welt is open all day; BMW Museum is open 10:00–18:00."},
        {time:"15:15–16:00",title:"Olympiapark → Old Town",type:"transit",text:"Use U3/U-Bahn back toward central Munich."},
        {time:"16:00–17:15",title:"Souvenir dash + art hunt",text:"Use the Old Town for the original watercolor plus official Wiesn/unique Munich souvenirs.",route:"Best zone: Viktualienmarkt → Dallmayr → Marienplatz / nearby official souvenir options."},
        {time:"17:20–18:20",title:"Dinner",text:"Pick one of the central quick-but-good options below."},
        {time:"~18:30",title:"City center → Allianz Arena",type:"transit",text:"Move early for match-day crowds.",route:"U6 toward Fröttmaning. Marienplatz → Fröttmaning is about 16 min, then allow another 15–20 min walking to the stadium."},
        {time:"20:45",title:"Germany vs Serbia",type:"fixed",text:"Allianz Arena."}
      ],
      timelineEibsee:[
        {time:"~07:15",title:"Breakfast + meet cars",text:"Eat before departure and be ready to drive."},
        {time:"~07:45",title:"Drive Munich → Eibsee",type:"transit",text:"This branch is by car, not train.",route:"Allow about 1.5 hours each way depending on traffic; official Eibsee guidance estimates Munich → Eibsee at about 1.5 hours by car."},
        {time:"~09:15–14:15",title:"Eibsee + optional Zugspitze",text:"Enjoy the lake; add Zugspitze only if visibility is worthwhile.",route:"Eibsee Pavillon and Eibsee Alm are both on-site lunch options."},
        {time:"~14:15–16:00",title:"Drive back to Munich",type:"transit",text:"Leave enough buffer for traffic and the match."},
        {time:"~16:00–17:30",title:"Reset + quick dinner",text:"Regroup at the Airbnb / central Munich and eat before the stadium."},
        {time:"~18:30",title:"Munich → Allianz Arena",type:"transit",text:"Use U6 toward Fröttmaning.",route:"Allow stadium walking and security buffer."},
        {time:"20:45",title:"Germany vs Serbia",type:"fixed",text:"Allianz Arena."}
      ],
      meals:{
        breakfast:[
          {rank:"Best logistics",name:"Rischart at Hbf",desc:"Directly in the station and open early.",get:"Coffee + pastry/pretzel + something savory to-go.",q:"Rischart München Hauptbahnhof"},
          {rank:"User-interest pick",name:"Brotraum",desc:"Higher-quality destination bakery, but only worth it if your train timing comfortably allows the detour.",get:"Croissant or pain au chocolat + savory item + coffee.",q:"Brotraum Munich"},
          {rank:"Quick nearby alternative",name:"Mauerer",desc:"Bio bakery/café near the Hbf area with early opening.",get:"Breakfast roll / pretzel sandwich + coffee.",q:"Cafe Bäckerei Mauerer Schillerstraße Munich"}
        ],
        lunch:[
          {rank:"Best location",name:"Eibsee Pavillon",desc:"Right at the lake with Bavarian dishes and views.",get:"Wiener schnitzel, Bavarian plate or a lighter salad if heading up the mountain.",q:"Eibsee Pavillon"},
          {rank:"Most rustic",name:"Eibsee Alm",desc:"Casual mountain-inn option about a short walk from the lake/cable-car area.",get:"Soup, dumplings, Flammkuchen or another hearty Alpine dish.",q:"Eibsee Alm"},
          {rank:"If you spend time in Garmisch",name:"Gasthaus zur Schranne",desc:"Traditional Bavarian/Alpine inn in town; best if your plan includes a Garmisch stop.",get:"Zwiebelrostbraten or another classic regional main.",q:"Gasthaus zur Schranne Garmisch"}
        ],
        dinner:[
          {rank:"Fastest serious meal",name:"Max’s Beef Noodles",desc:"Quick hand-pulled beef noodles near Sendlinger Tor.",get:"Beef noodle soup—fast, warm and filling before the match.",q:"Max's Beef Noodles Munich"},
          {rank:"Bavarian option",name:"Andy’s Krablergarten",desc:"Casual schnitzel restaurant near Sendlinger Tor; good if the group wants German food.",get:"Schnitzel, but only if you have enough time for a sit-down meal.",q:"Andy's Krablergarten Munich"},
          {rank:"Fastest Marienplatz option",name:"ALIS SUPERFOOD",desc:"High-volume kebab/Turkish spot right by Marienplatz, convenient before the U6 transfer.",get:"Chicken or beef box/wrap to keep the stadium commute moving.",q:"ALIS SUPERFOOD Marienplatz Munich"}
        ]
      }
    },
    fri:{
      label:"Friday · Wiesn I",
      date:"2026-10-02",
      title:"First full Oktoberfest day.",
      summary:["Breakfast + Bavarian Outfitters pickup","Change into Tracht","Explore Wiesn before noon","Hofbräu 12:00–17:30","Optional nightlife after"],
      weather:[
        {period:"Morning",time:"09:00",place:"Munich",lat:48.1351,lon:11.5820,fallback:54},
        {period:"Midday",time:"13:00",place:"Munich",lat:48.1351,lon:11.5820,fallback:65},
        {period:"Night",time:"21:00",place:"Munich",lat:48.1351,lon:11.5820,fallback:57}
      ],
      kit:{
        morning:{icon:"👔",title:"Breakfast + rental pickup",text:"Wear normal casual clothes to breakfast and Bavarian Outfitters; change into Tracht back at the Airbnb."},
        midday:{icon:"👕",title:"Inside the tent",text:"Lederhosen/Dirndl with the normal shirt/blouse and comfortable shoes. Do not add a heavy sweater inside—the tent gets warm."},
        night:{icon:"🌙",title:"After the tent",text:"Keep a light jacket or sweater at the Airbnb if you expect to come back before going out; otherwise bring a packable layer if it fits your tiny bag."},
        bring:"Very small permitted crossbody/fanny pack, phone, ID, €50–80 cash, card, portable charger and lip balm. Hydrate before you leave."
      },
      timeline:[
        {time:"08:15–08:50",title:"Breakfast + hydration",text:"Use one of the neighborhood choices below."},
        {time:"~09:00",title:"Bavarian Outfitters pickup",type:"fixed",text:"Pick up the reserved Lederhosen/Dirndl at Bavarian Outfitters, Lindwurmstraße 108A.",route:"Walk from the Airbnb; the shop opens at 07:30 on Oktoberfest Fridays. Your reservation is already made."},
        {time:"09:30–10:15",title:"Back to Airbnb + change into Tracht",text:"Fit check, get dressed, sunscreen, hydration, tiny festival bag only."},
        {time:"~10:25",title:"Airbnb → Theresienwiese",type:"transit",text:"Walk if the weather is fine.",route:"Allow roughly 15–20 min on foot from your Lindwurmstraße base; use live Maps for the nearest festival entrance."},
        {time:"10:45–11:50",title:"Explore the Wiesn",text:"Photos, Bavaria statue, rides, souvenirs and festival orientation before the table."},
        {time:"12:00–17:30",title:"Hofbräu-Festzelt",type:"fixed",text:"Your package includes beer, a meal and dessert.",route:"Treat this as your main lunch and likely your main dinner-calorie block."},
        {time:"17:30+",title:"Free-form Oktoberfest night",type:"optional",text:"Rides, Oide Wiesn, another tent if possible, then bars/Pacha only if the group wants more."}
      ],
      meals:{
        breakfast:[
          {rank:"Best early option",name:"Mauerer",desc:"Bakery/café with an early opening near the Hbf side of your neighborhood.",get:"Pretzel breakfast, filled roll or pastry + coffee.",q:"Cafe Bäckerei Mauerer Schillerstraße Munich"},
          {rank:"Simple local bakery",name:"Wimmer",desc:"Reliable German bakery on Lindwurmstraße.",get:"Pretzel, Berliner or savory roll + coffee.",q:"Privat Bäckerei Wimmer Lindwurmstraße Munich"},
          {rank:"Late-sleeper option",name:"Radio Wunder",desc:"Coffee/brunch literally at your Airbnb address, but it opens later.",get:"Coffee + a light brunch item; only use if you're running on the later side.",q:"Radio Wunder Lindwurmstraße 189 Munich"}
        ],
        lunch:[
          {rank:"Primary plan",name:"Hofbräu-Festzelt meal",desc:"This is the planned lunch and is already included in your reservation package.",get:"Eat the included meal; don't buy a second full lunch beforehand."},
          {rank:"If hungry before noon",name:"Wiesn roast-chicken stand",desc:"Classic festival food, but keep it small so you still enjoy the tent meal.",get:"Share a half chicken or smaller snack."},
          {rank:"Quick festival snack",name:"Pretzel / sausage stand",desc:"Best if someone needs food while walking the grounds.",get:"Large pretzel, sausage or similar handheld snack."}
        ],
        dinner:[
          {rank:"Most likely answer",name:"No separate dinner needed",desc:"The Hofbräu meal + dessert + beer will probably carry you through the evening.",get:"Wait until you're genuinely hungry rather than scheduling dinner."},
          {rank:"Stay inside Wiesn",name:"Festival food stand",desc:"Best if hunger returns while you're still at Oktoberfest.",get:"Sausage, roast chicken, pretzel or another handheld festival food."},
          {rank:"Post-Wiesn sit-down",name:"Andy’s Krablergarten",desc:"Nearby-ish casual option if the group wants a real late meal.",get:"Giant schnitzel.",q:"Andy's Krablergarten Munich"}
        ],
        nightlife:[
          {rank:"Group-interest club",name:"Pacha Munich",desc:"Central glam/house-oriented club open Friday from 22:00; some of the group already wants to try it.",get:"Check that night's DJ/event before committing. VIP/table reservations are available.",q:"Pacha Munich"},
          {rank:"Best cocktail quality",name:"Zephyr Bar",desc:"Tiny creative cocktail bar; ideal for a small subgroup before/after the festival.",get:"Signature cocktail; treat as walk-in and expect limited space.",q:"Zephyr Bar Munich"},
          {rank:"Best polished bar",name:"Ory Bar",desc:"Mandarin Oriental cocktail bar with a more upscale, reservable setup.",get:"Reserve if a group wants guaranteed seats.",q:"Ory Bar Munich"}
        ]
      }
    },
    sat:{
      label:"Saturday · Dachau + Wiesn II",
      date:"2026-10-03",
      title:"Memorial morning, festival finale.",
      summary:["Leave early for Dachau","Dachau at 09:00","Lunch on return to Munich","Ballabeni if timing works","Change into Tracht → Ochsenbraterei"],
      weather:[
        {period:"Morning",time:"08:00",place:"Dachau",lat:48.2692,lon:11.4680,fallback:48},
        {period:"Midday",time:"13:00",place:"Munich",lat:48.1351,lon:11.5820,fallback:64},
        {period:"Night",time:"21:00",place:"Munich",lat:48.1351,lon:11.5820,fallback:51}
      ],
      kit:{
        morning:{icon:"🧥",title:"Dachau",text:"Long-sleeve shirt, sweater/light jacket, full-length pants and comfortable walking shoes. Keep the look simple and respectful."},
        midday:{icon:"🍦",title:"Back in Munich",text:"You can shed the sweater if it warms up. Have lunch, then Ballabeni only if timing is healthy."},
        night:{icon:"🍻",title:"Oktoberfest finale",text:"Change into Tracht at the Airbnb before heading to Ochsenbraterei."},
        bring:"Morning: water, tissues, portable charger, light jacket, ID and transit access. Leave Tracht at the Airbnb and change after the memorial."
      },
      timeline:[
        {time:"~07:15",title:"Quick breakfast",text:"Eat before leaving or grab something at Hbf."},
        {time:"~07:40",title:"Airbnb → Hbf",type:"transit",text:"Start moving with enough buffer.",route:"Walk to Poccistraße → X6 to Hauptbahnhof Süd (~11 min on bus). Allow ~25 min door-to-platform."},
        {time:"~08:05",title:"Hbf → Dachau Bahnhof",type:"transit",text:"Take S2 toward Dachau/Petershausen.",route:"Official memorial guidance puts Hbf → Dachau at about 25 min."},
        {time:"~08:30–08:50",title:"Dachau Bahnhof → Memorial",type:"transit",text:"Transfer to bus 726 toward Saubachsiedlung.",route:"Bus ride is about 10 min; get off at KZ-Gedenkstätte."},
        {time:"09:00–~12:00",title:"Dachau Memorial Site",type:"fixed",text:"Priority visit. Give it the full morning and don't rush."},
        {time:"~12:10–13:00",title:"Return to central Munich",type:"transit",text:"Bus 726 → S2 back toward Hbf."},
        {time:"~13:00–14:00",title:"Lunch + optional Ballabeni",text:"Choose one of the lunch options below; Ballabeni is dessert, not lunch.",route:"If the memorial runs long, skip Ballabeni before you compress the tent setup."},
        {time:"~14:15–15:35",title:"Airbnb reset + change",text:"Shower/refresh, hydrate and change into Tracht."},
        {time:"~15:40",title:"Airbnb → Wiesn",type:"transit",text:"Walk to Theresienwiese.",route:"Allow about 15–20 min plus entrance/crowd buffer."},
        {time:"16:30–close",title:"Ochsenbraterei",type:"fixed",text:"Your main dinner and Oktoberfest finale."}
      ],
      meals:{
        breakfast:[
          {rank:"Best Hbf logistics",name:"Rischart at Hbf",desc:"Fastest reliable option when you're already catching the S2.",get:"Coffee + pastry/pretzel + savory item.",q:"Rischart München Hauptbahnhof"},
          {rank:"Near the route",name:"Mauerer",desc:"Early bakery option before reaching Hbf.",get:"Filled roll or pretzel + coffee.",q:"Cafe Bäckerei Mauerer Schillerstraße Munich"},
          {rank:"Simple bakery",name:"Wimmer",desc:"German bakery option on Lindwurmstraße.",get:"Pretzel, pastry or savory breakfast roll.",q:"Privat Bäckerei Wimmer Lindwurmstraße Munich"}
        ],
        lunch:[
          {rank:"Best after S2 return",name:"Augustiner-Keller",desc:"Near Hbf and easy to reach after Dachau; classic Munich setting.",get:"Split a lighter Bavarian lunch rather than overloading before the tent.",q:"Augustiner-Keller Munich"},
          {rank:"Fast route-home option",name:"Max’s Beef Noodles",desc:"Efficient warm lunch near Sendlinger Tor on the way back south.",get:"Beef noodle soup.",q:"Max's Beef Noodles Munich"},
          {rank:"Bavarian option",name:"Andy’s Krablergarten",desc:"Casual schnitzel option near Sendlinger Tor.",get:"Share or choose a smaller meal if you're eating again at 16:30.",q:"Andy's Krablergarten Munich"}
        ],
        dinner:[
          {rank:"Primary plan",name:"Ochsenbraterei meal",desc:"This is your planned dinner and is already included.",get:"Enjoy the included ox-focused meal + dessert + beer."},
          {rank:"If someone dislikes the included meal",name:"Wiesn food stands",desc:"Plenty of quick alternatives remain inside the festival.",get:"Roast chicken, sausage, pretzel or another classic stand item."},
          {rank:"Late fallback",name:"Max’s / Andy’s",desc:"Only if someone somehow needs another real meal after the tent.",get:"Noodles for speed or schnitzel for something heavier.",q:"Sendlinger Tor restaurants Munich"}
        ],
        nightlife:[
          {rank:"Potential final-night club",name:"Pacha Munich",desc:"Open Saturday from 22:00; the obvious option if the group still wants a club night after Ochsenbraterei.",get:"Check the Oktoberfest event/DJ and consider a VIP/table reservation for a larger group.",q:"Pacha Munich"},
          {rank:"Small-group cocktails",name:"Zephyr Bar",desc:"Creative cocktails, but the space is tiny.",get:"Go only with a small subgroup.",q:"Zephyr Bar Munich"},
          {rank:"Upscale fallback",name:"Ory Bar",desc:"More polished and much easier to plan for seats.",get:"Reserve ahead if this becomes the chosen post-Wiesn plan.",q:"Ory Bar Munich"}
        ]
      }
    },
    sun:{
      label:"Sunday · Departure",
      date:"2026-10-04",
      title: MODE==='pair' ? "Return Tracht, pack, Reykjavík connection." : "Kyle + Emma depart; group gets one last Munich day.",
      summary: MODE==='pair'
 ? ["Breakfast near the Airbnb","Return rental Tracht at 09:00","Leave for MUC around 10:15","FI533 to Reykjavík at 14:05","FI615 → JFK · arrive 19:20"]
 : ["Two travelers depart for MUC","Final Oktoberfest afternoon","Last souvenir / ride / tent lap","Final Munich dinner","Early-ish night before Monday flight"],
      weather:[
        {period:"Morning",time:"08:00",place:"Munich",lat:48.1351,lon:11.5820,fallback:49},
        {period:"Midday",time:"12:00",place:"MUC",lat:48.3537,lon:11.7750,fallback:63},
        {period:"Night",time:"21:00",place:"Travel day",lat:48.1351,lon:11.5820,fallback:55}
      ],
      kit:{
        morning:{icon:"🧳",title:"Breakfast + return",text:"Comfortable travel clothes with a light sweater/jacket for the cool morning."},
        midday:{icon:"✈️",title:"Airport",text:"Wear the bulkiest comfortable layer/shoes if that saves luggage space."},
        night:{icon:"🏠",title:"After Munich",text:"No Munich outfit planning needed—this is travel time."},
        bring:"Passport, wallet, phone, charger/portable battery, all luggage. Do a final bathroom/bedroom/outlet sweep before leaving."
      },
      timelinePair:[
        {time:"~08:00",title:"Breakfast",text:"Pick one of the convenient options below."},
        {time:"09:00–09:25",title:"Return Tracht",type:"fixed",text:"Return the reserved outfits to Bavarian Outfitters, Lindwurmstraße 108A.",route:"The shop opens at 09:00 Sunday; returning immediately keeps the airport morning clean."},
        {time:"09:25–10:00",title:"Final pack + sweep",text:"Check chargers, bathroom, drawers and fridge."},
        {time:"~10:15",title:"Airbnb → MUC",type:"transit",text:"Leave for the airport with a comfortable buffer.",route:"Use the easiest luggage route available that morning; S-Bahn via Hbf or taxi/Uber."},
        {time:"~11:30",title:"Arrive MUC",text:"Check bags, security and eat lunch if needed."},
        {time:"14:05",title:"Munich → Reykjavík",type:"fixed",text:"Icelandair FI533 · arrives KEF 16:00."},
        {time:"16:00–~17:00",title:"Reykjavík layover",type:"transit",text:"1 hour connection at Keflavík."},
        {time:"~17:00",title:"Reykjavík → JFK",type:"fixed",text:"Icelandair FI615 · arrives JFK 19:20 Sunday."}
      ],
      timelineGroup:[
        {time:"~08:30",title:"Breakfast",text:"Slow morning after Saturday's tent."},
        {time:"~10:15",title:"Two travelers depart for MUC",type:"transit",text:"The rest of the group keeps the Airbnb through Monday departure."},
        {time:"11:00–12:30",title:"Easy brunch / reset",text:"Keep the morning relaxed and hydrate."},
        {time:"~12:30",title:"Head to Oktoberfest closing day",type:"transit",text:"Walk from the Airbnb to Theresienwiese.",route:"This is the final day of Oktoberfest 2026, so use it for anything the group missed rather than adding another major city excursion."},
        {time:"13:00–17:30",title:"Final Wiesn afternoon",type:"optional",text:"Rides, souvenirs, one last tent/beer-hall lap, Oide Wiesn, food stands and group photos."},
        {time:"17:30–19:00",title:"Final Munich dinner",text:"Choose something easy and group-friendly from the dinner options."},
        {time:"19:00–21:00",title:"Pack + low-key final night",text:"No huge club night—the group has an early airport departure Monday."}
      ],
      meals:{
        breakfast:[
          {rank:"Best nearby bakery",name:"Wimmer",desc:"Straightforward bakery breakfast on Lindwurmstraße.",get:"Coffee + pretzel/pastry + savory roll.",q:"Privat Bäckerei Wimmer Lindwurmstraße Munich"},
          {rank:"Best early café/bakery",name:"Mauerer",desc:"Good early-opening option if your route takes you toward Hbf.",get:"Breakfast roll, pretzel or pastry + coffee.",q:"Cafe Bäckerei Mauerer Schillerstraße Munich"},
          {rank:"Best airport-route option",name:"Rischart at Hbf",desc:"Eat at the station just before boarding the S-Bahn to MUC.",get:"Coffee + pastry / savory bakery item to-go.",q:"Rischart München Hauptbahnhof"}
        ],
        lunch:[
          {rank:"Best final Bavarian stop",name:"Airbräu",desc:"The airport's own brewery and a fun final Bavarian meal if security timing is comfortable.",get:"One Bavarian dish; skip the beer if you don't want to board feeling heavy.",q:"Airbräu Munich Airport"},
          {rank:"Terminal 2 quality option",name:"Käfer Bistro",desc:"Higher-quality bistro behind security in Terminal 2.",get:"Pick a light Bavarian/international lunch before boarding.",q:"Käfer Bistro Munich Airport"},
          {rank:"Fast airport option",name:"Backstube Wünsche / bakery",desc:"Simple grab-and-go if you don't want a sit-down airport meal.",get:"Sandwich/pretzel + coffee/water.",q:"Backstube Wünsche Munich Airport"}
        ],
        dinner:[
          {rank:"Not a Munich meal",name:"Travel day",desc:"No Munich dinner plan needed after a 14:05 departure.",get:"Handle dinner based on your flight/arrival schedule."}
        ]
      }
    },
    mon:{
      label:"Monday · Group Departure",
      date:"2026-10-05",
      title:"Early airport run.",
      summary:["Early wake-up","Airbnb → MUC","Condor DE4304 at 09:15","Frankfurt connection","DE216 → JFK"],
      weather:[
        {period:"Morning",time:"06:00",place:"Munich",lat:48.1351,lon:11.5820,fallback:47},
        {period:"Airport",time:"08:00",place:"MUC",lat:48.3537,lon:11.7750,fallback:50},
        {period:"Midday",time:"12:00",place:"Travel day",lat:48.3537,lon:11.7750,fallback:58}
      ],
      kit:{
        morning:{icon:"🧳",title:"Airport departure",text:"Comfortable travel clothes with an easy outer layer for the cool morning."},
        midday:{icon:"✈️",title:"Frankfurt connection",text:"Keep passport, wallet, phone and boarding passes easy to access."},
        night:{icon:"🗽",title:"Arrival day",text:"No Munich outfit planning needed."},
        bring:"Passport, wallet, all luggage, phone, charger/portable battery, boarding passes and any receipts/items needed for tax refund."
      },
      timeline:[
        {time:"~05:45",title:"Wake + final sweep",text:"No complicated breakfast plan; use snacks/airport food if needed."},
        {time:"~06:15",title:"Airbnb → MUC",type:"transit",text:"Leave with enough buffer for the 09:15 Condor departure.",route:"With luggage, use the simplest route available that morning: S-Bahn via Hbf or a pre-booked taxi/Uber split across cars."},
        {time:"~07:15",title:"Arrive MUC",text:"Check bags, security and get breakfast after clearing formalities."},
        {time:"09:15",title:"MUC → Frankfurt",type:"fixed",text:"Condor DE4304 · arrives FRA 10:10."},
        {time:"10:10–11:40",title:"Frankfurt layover",type:"transit",text:"1h 30m connection; follow transfer signs for the JFK departure."},
        {time:"11:40",title:"Frankfurt → JFK",type:"fixed",text:"Condor DE216 · arrives JFK 14:25 local time."}
      ],
      meals:{
        breakfast:[
          {rank:"Best airport option",name:"Airbräu",desc:"If open and timing works after check-in/security, this is the most Munich-specific final breakfast option.",get:"Coffee + breakfast item; keep it quick.",q:"Airbräu Munich Airport"},
          {rank:"Fastest",name:"Airport bakery",desc:"Use whichever bakery is closest to your gate/terminal.",get:"Pretzel/sandwich + coffee."},
          {rank:"Bring from Airbnb",name:"Grab-and-go snacks",desc:"Best if nobody wants to risk food timing before the flight.",get:"Water + something simple for the ride to MUC."}
        ],
        lunch:[
          {rank:"Connection meal",name:"Frankfurt Airport",desc:"Use the 1h 30m layover for something quick if security/transfer timing permits.",get:"Grab-and-go rather than a sit-down meal."}
        ],
        dinner:[{rank:"Travel day",name:"JFK / home",desc:"No Munich dinner planning needed.",get:"Eat based on arrival plans."}]
      }
    }
  }
};

const UBIGI = {
  code:"44M62Z7D",
  recommendation:"10 GB · 7 days",
  price:"€10",
  discounted:"€8",
  note:"Best fit for this 5-day trip: plenty for Maps, WhatsApp, transit, restaurant searches and normal social use.",
  steps:["Download the Ubigi app","Install the eSIM before departure","Buy the Germany 10 GB / 7-day plan","Enter referral code 44M62Z7D on the first purchase","Activate/use the eSIM when you land in Germany"]
};

const PACK = {
 pair:{
   men:["2 short-sleeve shirts","2 long-sleeve shirts","1 sweater or quarter-zip","1 light waterproof jacket","1 warmer fleece/sweater for the Alpine day","2 casual pants + 1 nicer dinner pair","Comfortable walking shoes + optional nicer dinner shoe","Lederhosen/Tracht set + long socks + sturdy shoes","Underwear/socks + 1 spare day","Sunglasses, toiletries, prescriptions, electrolytes, blister care"],
   women:["2 short-sleeve tops","2 long-sleeve tops","1 cardigan or sweater","1 light waterproof jacket","1 warmer fleece/sweater for the Alpine day","2 casual bottoms + 1 nicer dinner/bar outfit","Comfortable walking shoes + optional nicer dinner shoe","Dirndl/Tracht set + blouse/apron + comfortable festival shoes","Underwear/socks/tights as needed + 1 spare day","Skincare/hair items, period products, prescriptions, electrolytes, blister care"]
 },
 group:{
   men:["Passport + wallet + cards + some cash","Phone + charging cable + portable charger","European plug adapter","Comfortable walking shoes","2 short-sleeve shirts","2 long-sleeve shirts","1 sweater or sweatshirt","1 light waterproof jacket","1 warmer layer if going to Eibsee/Zugspitze","2–3 pairs of pants","Lederhosen/Tracht rental reservation or outfit","Small crossbody/fanny pack that meets festival restrictions","Underwear/socks + 1 spare day","Sunglasses + toiletries + medications","Electrolytes + blister care"],
   women:["Passport + wallet + cards + some cash","Phone + charging cable + portable charger","European plug adapter","Comfortable walking shoes","2 short-sleeve tops","2 long-sleeve tops","1 sweater or cardigan","1 light waterproof jacket","1 warmer layer if going to Eibsee/Zugspitze","2–3 casual bottoms","Dirndl/Tracht rental reservation or outfit","Small crossbody/fanny pack that meets festival restrictions","Underwear/socks/tights as needed + 1 spare day","Skincare/hair items + period products + medications","Electrolytes + blister care"]
 }
};

const PLACE_META = {
 "Pfistermühle":{rating:"4.3",reserve:"Reservation recommended"},
 "Aimy":{rating:"4.1",reserve:"Reservation recommended"},
 "Wirtshaus in der Au":{rating:"4.4",reserve:"Reservation recommended"},
 "Augustiner-Keller":{rating:"4.1",reserve:"Reservation recommended"},
 "Zephyr Bar":{rating:"4.8",reserve:"Walk-in"},
 "Ory Bar":{rating:"4.1",reserve:"Reservation recommended"},
 "Ballabeni Ice Cream Stammhaus":{rating:"4.5"},
 "Rischart at München Hbf":{rating:"3.2",reserve:"Walk-in"},
 "Rischart at Hbf":{rating:"3.2",reserve:"Walk-in"},
 "Café Frischhut":{rating:"4.5",reserve:"Walk-in"},
 "Max’s Beef Noodles":{rating:"4.6",reserve:"Walk-in"},
 "Andy’s Krablergarten":{rating:"4.4",reserve:"Walk-in only"},
 "Airbräu":{rating:"3.8"},
 "Mauerer":{rating:"3.8",reserve:"Walk-in"},
 "Wimmer":{rating:"4.2",reserve:"Walk-in"},
 "ALIS SUPERFOOD":{rating:"4.6",reserve:"Walk-in"},
 "Eibsee Pavillon":{rating:"3.3",reserve:"Walk-in possible"},
 "Gasthaus zur Schranne":{rating:"4.3",reserve:"Reservation recommended"},
 "Pacha Munich":{rating:"2.4",reserve:"VIP/table reservation available"},
 "Viktualienmarkt":{rating:"4.5",reserve:"Walk-in"},
 "Viktualienmarkt stalls":{rating:"4.5",reserve:"Walk-in"},
 "Hofbräuhaus":{rating:"4.0",reserve:"Large-group walk-in available"},
 "Rischart Café am Markt":{rating:"3.4",reserve:"Walk-in"},
 "Brotraum":{rating:"4.1",reserve:"Walk-in"},
 "Eibsee Alm":{rating:"4.4",reserve:"Walk-in accepted"},
 "Radio Wunder":{rating:"New",reserve:"Walk-in"},
 "Airbräu":{rating:"3.8",reserve:"Walk-in"},
 "Käfer Bistro":{rating:"3.2",reserve:"Reservation recommended"},
 "Backstube Wünsche / bakery":{rating:"4.0",reserve:"Walk-in"}
};
function metaBadges(name){
 const m=PLACE_META[name]; if(!m) return "";
 return '<div class="badges placebadges">'+(m.rating?'<span class="badge rating">'+(m.rating==="New"?"New":"★ "+m.rating)+'</span>':'')+(m.reserve?'<span class="badge reserve">'+m.reserve+'</span>':'')+'</div>';
}
function mapsButtons(q){
 const enc=encodeURIComponent(q);
 return '<div class="maps"><a class="mapbtn" href="https://maps.apple.com/?q='+enc+'">Apple</a><a class="mapbtn" href="https://www.google.com/maps/search/?api=1&query='+enc+'">Google</a></div>';
}
const GROUP_WALKIN = {
 wed:{breakfast:{name:"Viktualienmarkt stalls",desc:"Easy no-reservation fallback that can absorb a big group by splitting across stalls.",get:"Grab-and-go breakfast/market snacks.",q:"Viktualienmarkt Munich"},lunch:{name:"Hofbräuhaus",desc:"Huge historic beer hall with ground-floor walk-in seating; useful if the full group wants one place.",get:"Roast pork, schnitzel, sausage or pretzel + beer.",q:"Hofbräuhaus München"},dinner:{name:"Hofbräuhaus",desc:"Large-capacity walk-in fallback if reservations fall apart.",get:"Classic Bavarian beer-hall dinner.",q:"Hofbräuhaus München"}},
 thu:{breakfast:{name:"Rischart at Hbf",desc:"Fast walk-in station bakery for either branch.",get:"Coffee + pastry/pretzel + savory item.",q:"Rischart München Hauptbahnhof"},lunch:{name:"Eibsee Alm",desc:"Walk-ins accepted and good for groups on the driving branch.",get:"Kaiserschmarrn or a Bavarian lunch.",q:"Eibsee Alm"},dinner:{name:"Hofbräuhaus",desc:"Large-group walk-in backup before the match if the group wants one easy Munich option.",get:"Keep the meal relatively quick.",q:"Hofbräuhaus München"}},
 fri:{breakfast:{name:"Wimmer",desc:"Simple walk-in bakery option before rental pickup.",get:"Pretzel/roll + coffee.",q:"Privat Bäckerei Wimmer Lindwurmstraße Munich"},lunch:{name:"Hofbräu-Festzelt meal",desc:"Already reserved and included; this is the group lunch.",get:"Eat the included meal."},dinner:{name:"Festival food stand",desc:"No-reservation group fallback inside the festival.",get:"Roast chicken, sausage or pretzel."}},
 sat:{breakfast:{name:"Rischart at Hbf",desc:"Walk-in station bakery before the S2.",get:"Coffee + pastry/pretzel + savory item.",q:"Rischart München Hauptbahnhof"},lunch:{name:"Augustiner-Keller",desc:"Large traditional venue near Hbf; best walk-in-style fallback for the group after Dachau.",get:"Keep lunch lighter before the 16:30 tent meal.",q:"Augustiner-Keller Munich"},dinner:{name:"Ochsenbraterei meal",desc:"Already reserved and included; this is the group dinner.",get:"Eat the included meal."}},
 sun:{breakfast:{name:"Wimmer",desc:"Easy walk-in bakery near the Airbnb.",get:"Coffee + pretzel/pastry + savory roll.",q:"Privat Bäckerei Wimmer Lindwurmstraße Munich"},lunch:{name:"Airbräu",desc:"Airport brewery and easiest final group meal if timing works.",get:"One Bavarian dish before the flight.",q:"Airbräu Munich Airport"},dinner:{name:"Travel day",desc:"No Munich dinner slot after departure.",get:"Handle dinner based on flight/arrival."}}
};
function withGroupFallback(options,id,type){
 if(MODE!=="group") return options||[];
 const fb=GROUP_WALKIN[id]?.[type]; if(!fb) return options||[];
 const has=(options||[]).some(p=>p.name===fb.name);
 return has?(options||[]): [...(options||[]),{rank:"Large-group walk-in",...fb}];
}
function renderMeals(meals,id){
 const types=['breakfast','lunch','dinner'].concat(meals.nightlife?['nightlife']:[]);
 let h='<div class="mealTabs">'+types.map((t,i)=>'<button class="mealTab '+(i===0?'on':'')+'" data-meal="'+id+'-'+t+'">'+t[0].toUpperCase()+t.slice(1)+'</button>').join('')+'</div>';
 h+=types.map((t,i)=>'<div class="mealPane '+(i===0?'on':'')+'" id="'+id+'-'+t+'">'+withGroupFallback(meals[t],id,t).map(p=>'<div class="placecard"><div class="placeTop"><div><div class="rank">'+p.rank+'</div><h3>'+p.name+'</h3>'+metaBadges(p.name)+'</div>'+(p.q?mapsButtons(p.q):'')+'</div><p>'+p.desc+'</p><p class="get"><b>Recommended:</b> '+p.get+'</p></div>').join('')+'</div>').join('');
 return h;
}
function timelineHtml(items){ return '<div class="card timeline">'+items.map(s=>'<div class="stop '+(s.type||'')+'"><div class="mark"></div><div class="time">'+s.time+'</div><h3>'+s.title+'</h3><p>'+s.text+'</p>'+(s.route?'<div class="route"><b>How:</b> '+s.route+'</div>':'')+(s.badge?'<div class="badges"><span class="badge tentative">'+s.badge+'</span></div>':'')+'</div>').join('')+'</div>'; }
function weatherHtml(list,date,label){
 return '<div class="card weather"><div class="ey">'+label+'</div><div class="wxgrid">'+list.map(w=>'<div class="wx" data-wx="'+w.time+'|'+w.lat+'|'+w.lon+'|'+date+'"><div class="period">'+w.period+'</div><div class="temp">'+w.fallback+'°</div><div class="cond">Forecast loading</div><div class="place">'+w.place+'</div></div>').join('')+'</div></div>';
}
function renderDay(id,d){
 const splitTimeline=id==='thu';
 const splitSunday=id==='sun';
 const weatherBlock = splitTimeline && MODE==='group'
   ? weatherHtml(d.weather,d.date,'Munich stayers · weather')+weatherHtml(d.weatherEibsee,d.date,'Eibsee drivers · weather')
   : weatherHtml(d.weather,d.date,'Weather by time of day');
 const timelineBlock = splitSunday
   ? (MODE==='group'
      ? '<div class="section">Timeline</div>'+timelineHtml(d.timelineGroup)
      : '<div class="section">Timeline</div>'+timelineHtml(d.timelinePair))
   : splitTimeline
   ? (MODE==='group'
      ? '<div class="section">Split timeline</div><div class="splitChoice"><div class="splitLabel">🚗 Driving to Eibsee</div>'+timelineHtml(d.timelineEibsee)+'</div><div class="splitChoice"><div class="splitLabel">🏙️ Staying in Munich</div>'+timelineHtml(d.timelineMunich)+'</div>'
      : '<div class="section">Timeline</div><div class="splitChoice"><div class="splitLabel">🏙️ Staying in Munich</div>'+timelineHtml(d.timelineMunich)+'</div>')
   : '<div class="section">Timeline</div>'+timelineHtml(d.timeline);
 return '<section id="'+id+'" class="page">'+
 '<div class="card"><div class="ey">'+d.label+'</div><h2>'+d.title+'</h2><div class="summary">'+d.summary.map((s,i)=>'<div class="sum"><div class="num">'+(i+1)+'</div><div>'+s+'</div></div>').join('')+'</div></div>'+
 weatherBlock+
 '<div class="card daykit"><div class="kithead"><b>What to wear today</b><span>By section of day</span></div><div class="kitparts">'+['morning','midday','night'].map(k=>'<div class="kitpart"><div class="ico">'+d.kit[k].icon+'</div><b>'+d.kit[k].title+'</b><p>'+d.kit[k].text+'</p></div>').join('')+'</div><div class="packbar"><b>Bring when you leave:</b> '+d.kit.bring+'</div></div>'+
 timelineBlock+
 '<div class="section">Food & nightlife</div><div class="card">'+renderMeals(d.meals,id)+'</div>'+
 '</section>';
}
function renderPrep(){
 let html='<section id="prep" class="page"><div class="card"><div class="ey">Before departure</div><h2>Prep once. Travel easy.</h2></div><div class="section">Bookings & setup</div><div class="card">';
 const tasks=[
 "Reserve / confirm Tracht rental at Bavarian Outfitters, Lindwurmstraße 108A.",
 "Reserve Pfistermühle Wednesday if choosing it.",
 "Reserve Ory Wednesday if you want guaranteed cocktail seating.",
 "Save Hofbräu + Ochsenbraterei vouchers offline.",
 "Download Germany–Serbia tickets.",
 "Confirm Dachau group meet time / whether you have a guide.",
 "Install Germany eSIM before departure.",
 "Download Munich offline in Maps and install DB Navigator / MVGO.",
 "Verify debit-card PIN; bring €180 cash; get €1/€2 locker coins at Hbf."
 ];
 html+=tasks.map(t=>'<label class="check"><input type="checkbox"><span>'+t+'</span></label>').join('')+'</div>';
 if(MODE==='group'){
   html+='<div class="section">Group eSIM <small>recommended</small></div><div class="card"><div class="ey">Ubigi · group recommendation</div><h2 style="margin-top:4px">10 GB for the trip · '+UBIGI.discounted+' after referral</h2><p class="mut">'+UBIGI.recommendation+' is currently '+UBIGI.price+' before the referral discount. Use <b>44M62Z7D</b> for 20% off your first purchase, bringing it to about <b>'+UBIGI.discounted+'</b>.</p><div class="summary" style="margin-top:12px">'+UBIGI.steps.map((x,i)=>'<div class="sum"><div class="num">'+(i+1)+'</div><div>'+x+'</div></div>').join('')+'</div><div class="packbar" style="margin-top:12px"><b>Why this one:</b> '+UBIGI.note+' Install it before the flight so nobody is troubleshooting setup at MUC.</div></div>';
 }
 return html+'</section>';
}
function renderPack(){
 let html='<section id="pack" class="page"><div class="card"><div class="ey">Packing</div><h2>What to bring to Munich.</h2><p class="mut">Built around the current forecast, Oktoberfest, Dachau and the optional Alpine day.</p></div>';
 if(MODE==='group'){
   html+='<div class="section">Women’s Packing List</div><div class="card packsec">'+PACK.group.women.map(x=>'<label class="check"><input type="checkbox"><span>'+x+'</span></label>').join('')+'</div>'+
         '<div class="section">Men’s Packing List</div><div class="card packsec">'+PACK.group.men.map(x=>'<label class="check"><input type="checkbox"><span>'+x+'</span></label>').join('')+'</div>';
 }else{
   html+='<div class="section">Men’s Packing List</div><div class="card packsec">'+PACK.pair.men.map(x=>'<label class="check"><input type="checkbox"><span>'+x+'</span></label>').join('')+'</div>'+
         '<div class="section">Women’s Packing List</div><div class="card packsec">'+PACK.pair.women.map(x=>'<label class="check"><input type="checkbox"><span>'+x+'</span></label>').join('')+'</div>';
 }
 return html+'</section>';
}
function flightRows(rows){
 return rows.map((f,i)=>'<div class="flightrow"><div class="flightcode">'+f.flight+'</div><div class="flightmain"><b>'+f.from+' → '+f.to+'</b><span>'+f.date+' · '+f.depart+' → '+f.arrive+' · '+f.airline+'</span>'+(f.layover?'<small>'+f.layover+'</small>':'')+'</div></div>').join('');
}
function renderFlightsOverview(){
 const outbound='<div class="section">Flights</div><div class="card flightcard"><div class="ey">Main group outbound</div>'+flightRows(FLIGHTS.outbound)+'</div>';
 if(MODE==='pair') return outbound+'<div class="card flightcard"><div class="ey">Kyle + Emma return</div>'+flightRows(FLIGHTS.pairReturn)+'</div>';
 return outbound+'<div class="card flightcard"><div class="ey">Return split</div><div class="subflight">Two travelers · Sunday Oct 4</div>'+flightRows(FLIGHTS.pairReturn)+'<div class="subflight">Main group · Monday Oct 5</div>'+flightRows(FLIGHTS.groupReturn)+'</div>';
}
function renderOverview(){
 const modeNote=MODE==='group'?'Shared group itinerary':'Pair / personal itinerary';
 return '<section id="overview" class="page on"><div class="card"><div class="ey">'+modeNote+' · Build 2026.09.27.9</div><h2>Munich + Oktoberfest</h2><div class="summary">'+
 Object.entries(TRIP.days).filter(([k])=>MODE==='group'||k!=='mon').map(([k,d])=>'<div class="sum"><div class="num">'+d.label.split(' ')[0][0]+'</div><div><b>'+d.label+'</b><br><small>'+d.summary.slice(0,3).join(' · ')+'</small></div></div>').join('')+
 '</div></div>'+renderFlightsOverview()+'<div class="section">Fixed time activities</div><div class="card"><div class="fixedGrid">'+TRIP.fixed.map(x=>'<div class="fixedCard"><div class="ico">'+x[0]+'</div><b>'+x[1]+'</b><span>'+x[2]+'</span></div>').join('')+'</div></div>'+
 '<div class="section">Souvenir ideas</div><div class="card">'+TRIP.souvenirs.map(s=>'<div class="souvenir"><div class="ico">'+s.icon+'</div><div><b>'+s.name+'</b><span>'+s.detail+'</span></div></div>').join('')+'</div></section>';
}
document.addEventListener('DOMContentLoaded',()=>{
 document.getElementById('pages').innerHTML=renderOverview()+renderPrep()+renderPack()+Object.entries(TRIP.days).filter(([k])=>MODE==='group'||k!=='mon').map(([k,d])=>renderDay(k,d)).join('');
 const tabs=[...document.querySelectorAll('.tab')],pages=[...document.querySelectorAll('.page')],bottom=[...document.querySelectorAll('.bottom button')];
 function go(id){tabs.forEach(x=>x.classList.toggle('on',x.dataset.p===id));pages.forEach(x=>x.classList.toggle('on',x.id===id));bottom.forEach(x=>x.classList.toggle('on',x.dataset.go===id));localStorage.setItem('munich-page-'+MODE,id);scrollTo(0,0)}
 tabs.forEach(x=>x.onclick=()=>go(x.dataset.p));bottom.forEach(x=>x.onclick=()=>go(x.dataset.go));
 document.querySelectorAll('.mealTab').forEach(b=>b.onclick=()=>{const target=b.dataset.meal;const parent=b.closest('.card');parent.querySelectorAll('.mealTab').forEach(x=>x.classList.remove('on'));parent.querySelectorAll('.mealPane').forEach(x=>x.classList.remove('on'));b.classList.add('on');document.getElementById(target).classList.add('on')});
 document.querySelectorAll('.page').forEach(page=>page.querySelectorAll('input[type=checkbox]').forEach((x,i)=>{const k='munich-'+MODE+'-'+page.id+'-check-'+i;x.checked=localStorage.getItem(k)==='1';x.onchange=()=>localStorage.setItem(k,x.checked?'1':'0')}));
 const tripMap={'2026-09-30':'wed','2026-10-01':'thu','2026-10-02':'fri','2026-10-03':'sat','2026-10-04':'sun','2026-10-05':'mon'};
 const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
 const todayPage=tripMap[today],todayBtn=document.getElementById('todayBtn');if(todayPage)todayBtn.dataset.go=todayPage;
 const saved=localStorage.getItem('munich-page-'+MODE);if(saved&&document.getElementById(saved))go(saved);else if(todayPage)go(todayPage);else go('overview');
 refreshWeather();
});
async function refreshWeather(){
 const nodes=[...document.querySelectorAll('[data-wx]')];
 const groups={};
 nodes.forEach(n=>{const [time,lat,lon,date]=n.dataset.wx.split('|');const key=date+'|'+lat+'|'+lon;(groups[key]??=[]).push({n,time,date,lat,lon})});
 for(const [key,items] of Object.entries(groups)){
  const {date,lat,lon}=items[0];
  try{
   const u='https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lon+'&hourly=temperature_2m,weather_code,precipitation_probability&temperature_unit=fahrenheit&timezone=Europe%2FBerlin&start_date='+date+'&end_date='+date;
   const j=await (await fetch(u,{cache:'no-store'})).json();
   const W={0:'Clear',1:'Mostly clear',2:'Partly cloudy',3:'Cloudy',45:'Fog',48:'Fog',51:'Drizzle',53:'Drizzle',55:'Heavy drizzle',61:'Light rain',63:'Rain',65:'Heavy rain',71:'Light snow',73:'Snow',75:'Heavy snow',80:'Showers',81:'Showers',82:'Heavy showers',95:'Thunderstorms'};
   items.forEach(o=>{const target=date+'T'+o.time;let idx=j.hourly.time.indexOf(target);if(idx<0)return;const t=Math.round(j.hourly.temperature_2m[idx]);o.n.querySelector('.temp').textContent=t+'°';o.n.querySelector('.cond').textContent=(W[j.hourly.weather_code[idx]]||'Forecast')+' · rain '+(j.hourly.precipitation_probability[idx]??'—')+'%'});
  }catch(e){}
 }
}
