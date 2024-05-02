# Roshan Mahesh's ECE 445 Lab Notebook - Team 30

My name is Roshan Mahesh, and this is my lab notebook for ECE 445. This notebook will contain entries that cover TA meetings, meetings with my group, what I worked on and how I debugged certain features, and the work I did with my group for deadlines. There will also be block diagrams and images to accompany some entries to showcase progress.

# TA Meeting: February 6, 2024

Objective of session: To meet with Surya for the first time.

- First meeting with Surya. He gave us his email and phone contact. We decided on Wednesdays at 10:30AM as our weekly meeting time.
- We also got our locker information for the locker in the lab room.
- We started discussing our project, which is a power quality and submetering device with a website that displays graphs and other information, similar to Professor Schuh's pitch project.
    - Also similar to the projects listed on the Power Engineering UIUC website.
- Surya thought that it was a good project. We had concerns about feasibility within the timeline of the course, but Surya thinks it would be fine.
- Also asked Surya about who Jack Blevins is since we got a random email from him about him being our mentor. We weren't sure if this was a spam email.
    -  Surya wasn't sure who he is either, said he'll get back to us.
- Design proposal due this Thursday

# Project Proposal: February 8, 2024

Objective: Finish writing and submitting the project proposal.

- Nicole wrote about the power supply unit. She also made the block diagram and the visual aid that we used for the paper. An image of the block diagram and visual aid are included in this repo, which is called "ECE 445 Visual Aid.png" and "ECE 445 Block Diagram.png".
- Soham wrote about the step down unit and the hardware portion of the control unit.
- I wrote about the website and software portion of the control unit. I explained that we would use JavaScript libraries to make the website and graphs, and Google Cloud for our database.
- We submitted the paper on time on February 8th.

# TA Meeting: February 14, 2024

Objective of session: Go over our ideas for the project and ask Surya any questions.

- Went over our progress with the design document. We didn't have many questions here since everything for our project proposal was fine.
- Told Surya that we'll be meeting with Jack Blevins to go over our project.
- We explained to Surya about how we plan to step down the wall voltage and then send data to an ESP32.
- Was told that we need to get lab notebooks or set up a Git repo for the lab notebook where we keep track of all progress.

# Jack Blevins Meeting: February 14, 2024

Objective of session: Understand Jack Blevins' background, go over our project, and get any guidance.

- Jack Blevins explained his decades long experience working with PCBs and other electrical systems in the rail industry.
- He also explained the kind of projects he got to work on while he was in college. Didn't really understand it since the technology is outdated.
- We explained that we're looking to make a power quality and submeter device. We will take in wall voltage, step down the voltage, and send the signals to a microcontroller. We will also have a battery circuit to take over for the wall power in case of a power outlet failure. Additionally, we will measure the voltage, current, and power that a load is taking in. All this data will then be put onto a website. The objective is to show a user all the data of a power outlet and a load so that energy could be conserved by knowning how much power is being consumed.
- He thought the project was fine. He asked us how we plan to step down the voltage and what we're using to actually measure all the quantitative data.
    -  We explained the step down circuit and the 2 ICs we're planning on using to measure all the data, and then send that data to a microcontroller for further processing.
- He asked us if we had any physical progress or PCB progress yet. We explained that we didn't yet since we were still in the design stages with the project proposal and design document.
- He told us to reach out to him with any questions about our design or PCB since he has experience in the field. He said he'll be visiting his family for the next 7-10 days, but he's free other than that.
- We sent Jack Blevins our project proposal and design document so that he has the documents if needed.

# TA Meeting: February 21, 2024

Objective of session: Go over our progress and ask Surya any questions.

- I missed this meeting due to prior commitments for another class. Soham and Nicole caught me up on what was discussed, which is shown below.
- Currently working on the Design Document.
- We went over our high-level requirements with Surya. He thought that they were ok, but he wanted us to be more quantitative with them so that they can be verified through testing.
- Had a question about the LiFePo batteries, was referred to CHARMS paper since they used LiFePo batteries.
- Surya also wanted us to mirror the paper for its formatting.

# Design Document: February 22, 2024

Objective: Finish writing and submitting the design document.

- We had a similar split of the workload as the project proposal:
    - Nicole worked on the power supply topics, the cost & schedule, the block diagram, and the physical design.
    - Soham worked on the step down topics, the hardware portion of the control unit, and the tolerance analysis.
    - I worked on the introduction, database topics, the software portion of the control unit, and the ethics & safety.
- For my part on the database subsystem, I also used Figma to create a rough outline of what the website would look like. This image is attached in the repo. It's called "ECE 445 Figma Sketch.png". Keep in mind that this isn't the actual website, it's just what I envision it to look like.
- For the ethics & safety, I discussed OSHA and IEEE standards. For the introduction, I found research online that showcased the problem that we were trying to solve.
- We submitted the design document on time on Febrary 22nd.

# TA Meeting: February 28, 2024

Meeting cancelled due to Design Review with Surya and Professor Schuh.

# Design Review: February 28, 2024

Objective: Present our design plans, circuit diagrams, and website sketches to Professor Schuh and Surya

- We presented everything from the Design Document. We individually spoke on the parts of the document that we wrote.
- Professor Schuh had a few questions regarding how we are going to take wall power, how we are going to account for certain electrial problems, and a question regarding the step down unit. He also had a question about how the data is transferred from the ESP32 to the website and how the data is formatted/represented.
- Overall, we presented well and we answered the questions well.

# TA Meeting: March 6, 2024

Objective of session: Go over our progress and ask Surya any questions. Overall, it was a short meeting since there wasn't much to discuss

- Did not meet 1st PCB wave since we all had exams this week prior to Spring Break.
- Will start PCB design of power suppy and step down unit after exams are done.
- Started making website.
- Discussed how to move forward after design review. Overall, the design review went well and we're on a good track.

# Website work: March 18, 2024

Objective: Get basic framework set up

- Set up React.js frontend framework and Node.js backend framework. Downloaded Express.js as the library to establish communication between frontend and backend.
- Set up framework can be seen in the package.json files in the home folder and in the client folder.
- Nothing was set up in terms of the frontend. Just wanted to make sure that the environment was set up.
- There wasn't any bugs to deal with here. Everything was set up fine.

# Website work: March 19, 2024

Objective: Get the basic frontend work done

- Design the buttons on the frontend. Also set it up so that pressing the buttons links to the next page. So, if you click on "Notifications", it takes you from localhost:3000 to localhost:3000/Notifications. 
- The button that you press also stays highlighted so that the user knows which page they're on.
- Read up on how to use the Chart.js library to graph data in real-time. The link can be found here: https://www.chartjs.org
- Image of the frontend can be found in the repo titled "ECE 445 Website Home Page.png".
- There was a bug to deal with, specifically with the <Link> component being depricated/not used anymore in the React.js library anymore. After googling the issue, I realized that the maintainers of the React.js library switched the component to <NavLink>. This code can be found in the following directory: client/src/App.js.

# TA Meeting: March 20, 2024

Objective of session: Go over our progress and ask Surya any questions.

- Going to submit PCB next Tuesday. Already missed the first and second PCB wave.
- Individual evaluation next week.
- Website construction has started, frontend more than halfway done - need to set up GCP and ESP32.
- Ordered more parts, nearing $100 though.
- Might not need LCD screen, redundant with website.
- Need to meet with machine shop to tell them we just need a box, or we just make it ourselves.

# Database work: March 25, 2024

Objective: Set up the Google Cloud MySQL database.

- Since I've already set up a Google Cloud account for CS411 that gave us $50, I used the same account since I had only used $5 of it.
- Had to reactivate this account.
- Set up the table to store all the data. The table is called PowerData. I think set up the columns for the table since that's where the data is going to be stored. The columns are called data_id, outlet_name, load_name, measurement_time, voltage, current, apparent_power, and real_power.
- I then tried to insert simulated data to make sure that the database is able to take in data. I used the following SQL statement to do that: INSERT INTO PowerData (data_id, outlet_name, load_name, measurement_time, voltage, current, apparent_power, real_power) VALUES (0, 'ECEB', 'CHARGER', '2024-03-25 05:30:00', 120.00, 3.00, 360.00, 360.00).
- The data was then properly inserted. An image of the database with data can be found in the repo titled "ECE 445 Database.png".
- There wasn't any bugs to deal with, but it took me a long time to set it up because I forgot how to set up a Google Cloud database, and the documentation online isn't as clean as you'd expect.

# PCB work: March 26, 2024

Objective: Submit the step down and control unit PCB.

- Met with group to finish off the 1st PCB.
- Soham had spent the last week working on the step down/control unit PCB. We hadn't finished the power supply PCB yet.
- The PCB design wasn't passing the inspection before we could submit it due to not having a board layer outline.
- I was trying to help my group by googling the issue and finding out how to fix it since none of us have PCB making experience.
- Eventually we were able to find a website that explained the error and how to fix it. Soham then made the changes within 5 minutes, which consisted of going to the board layer and just indicating the outline of the PCB.
- The PCB then passed inspection, and it was submitted to be manufactured for the 3rd round.
- Images of the step down and control unit schematics are in the repo labeled "ECE 445 Step Down Schematic.png" and "ECE 445 Control Unit Schematic.png".

# TA Meeting: March 27, 2024

Objective of session: Go over our progress and ask Surya any questions.

- Working on frontend, backend of website.
- Set up Google Cloud database, need to set up WebSocket.
- We aren’t using machine shop, we don’t think it’ll be complicated and won’t take up too much time.
- Ordered the first PCB, second PCB will be ordered next week.
- We will be working on the 2nd PCB, simulate first PCB and continue to look over it for errors.

# Website work: March 29, 2024

Objective: Get data from database to the backend server.

- First had to set up connection from backend server to the database. The mysql2 library allows for easy connections to be established. This code can be found near the top of the server.js file in the home directory.
- After this connection was established, I used the following SQL query to get the data and then print it to make sure I'm getting the right data: 'SELECT * FROM PowerData WHERE outlet_name = ? ORDER BY measurement_time DESC LIMIT 10', [outletName].
- This statement gets all the data from the PowerData table where the outlet_name is whatever I specify it to be. The data is then ordered in descending order by the time, and I only get the last 10 data points. This worked perfectly fine, so I knew that the backend server was able to connect and get data.

# PCB work: April 1, 2024

Objective: Submit the power supply PCB

- Nicole had gotten the PCB to pass inspection, so we didn't need to congregate as a group to debug it.
- Submitted the board for the 4th round.
- Images of the power supply schematics are in the repo labeled "ECE 445 Power Supply Schematic.png".

# ESP32 work: April 3, 2024

Objective: Set up ESP32 code to connect the ESP32 to the internet and send data to the database.

- Using the ESP32 dev board, I connected the ESP32 to the internet and then was able to send data to the database. You can see the code if you go to the arduino_code folder, there's an esp32.ino file.
- Connecting the ESP32 to the internet wasn't hard due to plenty of available documentation and the Wifi.h library. This worked right away.
- Sending data to the database ended up being very difficult and took hours to debug. I was using a library to get this done, but it just wasn't working. I kept getting a timeout error when the ESP32 was trying to connect with the database.
- To fix this, I shifted to another library that had a GitHub repo that showed how to read and write data to and from the database. Using this new library ended up working, as I was able to read and write data.
- We were never able to get the control unit on the PCB working, so this code ended up being useless as it wasn't used. However, if the PCB worked, we could've just plugged this code in.

# TA Meeting: April 3, 2024

Objective of session: Go over our progress and ask Surya any questions.

- Both PCBs have been ordered. Not sure if we’ll get our PCBs in time to fix for the 5th order.
- Don’t need any more parts, all ordered.
- 80% done for website, able to connect ESP32 to WiFi and database. Just need to display charts.
- Need to do power supply unit before the demo since it takes time, can’t do in real-time.
- Everything else can be demoed/tested in real-time.
- Made PCB with lots of test points, should be able to debug easily.
- Mock demo coming up soon, final demo and final presentation could be combined into 1 - will know more later.

# TA Meeting: April 11, 2024

Objective of session: Go over our progress and ask Surya any questions.

- Started putting components on PCB to make sure they fit.
- Started making the enclosure.
- Will start soldering this weekend.
- Tested the current transformer to make sure we are getting the right output current, which we are.
- Website just needs graphs and notifications now, ESP32 and database are set up.
- For the final demo, we have a plan for what we’re going to show but it’s more dependent on what we have done by the mock demo.
  - Surya said he’s fine with the plan.
- Didn’t need 5th PCB round order.

# Website work: April 16, 2024

Objective: Finish making voltage, current, apparent power, and real power graphs for power quality and submeter.

- After having the backend server get the data from the database, I set up a websocket connection between the frontend and backend. This is done by connecting API endpoints together and using the Socket.io library. By setting up a websocket, I can allow instantaneous data transfer.
- Setting up the websocket took some debugging since I was using a library called WebSocket first. This libary was extremely hard to use since there wasn't much documentation. Rather than spending hours debugging the issues from this websocket connection, I pivoted to the Socket.io library, which worked right away.
- Now that I'm able to get data to transfer between the frontend and backend, I created the graphs by using the Chart.js library.
- This library works by setting the x and y-axis of the graph, and then filling in the data field. Filling in the data field just required me to iterate through the array that the data was stored in. For example, for the voltage data, I just needed to iterate through the voltage array that contained all the voltage data.
- After a few hours of debugging since I wasn't indexing through the array properly since I wasn't sure how to render a new chart every second, I was able to get the graphs to work. The graphs can be seen in this repo in the video titled "Short Demo.mp4".
- The code for all this can be found in the following directory: client/src/Content/QualityContent.js.

# TA Meeting: April 17, 2024

Objective of session: Go over our progress and ask Surya any questions. Also did a mock demo to go over what to expect for the final demo.

- Presented introduction, high-level requirements, what works, and what doesn’t work yet.
- Explained the work we have left and our plans to complete the project.
- Asked questions about the enclosure and things to expect for the final demo.
  - We’ll need a strict enclosure that has a high voltage warning sticker, and we’ll need to bring printouts of our high-level requirement and other items.
- Not able to have the website working on Illinois WiFi due to security constraints on the WiFi. My hotspot isn’t strong enough to connect either.
  - Will need to figure this out by the final demo.
- Surya is overall happy with the progress, especially compared to the state of the project a week ago.

# Website work: April 18, 2024

Objective: Finish making the notifications page.

- For the notifications page, I wanted all prior notifications to appear on the website since I wanted a log of prior errors. This would be useful for a user since they can detect patterns of failures from this.
- To do this, I read about how each browser has something called local storage, which saves any data that's stored at that location. This information was found here: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- I then set the local storage up using the documentation above, and it worked fine right away. At this point, the whole website is done.

# Website work: April 20, 2024

Objective: Fix notifications page bug and IllinoisNet Wi-Fi issue.

- I decided to test the website one more time at the ECE building. However, nothing worked since the backend server kept giving me a timeout error when trying to read data from the database.
- I asked one of my friends that's currently taking CS411 what the issue could be since he's also working with Google Cloud. He informed me that IllinoisNet blocks connections to Google Cloud.
- To get around this, I tried to connect my laptop to my hotspot connection; however, my hotspot connection wasn't strong enough inside anywhere in the ECE building. I tried in numerous locations such as the atrium on the first floor, the second floor classrooms, and the 3rd floor classrooms.
- My only solution at that point when we were so close to the final demo was to tell Surya that we had to take a video of the website working for the demo.
- I tested the website again back at my apartment, and that's when I realized that none of the notifications that I had previously generated weren't showing on the website.
- I read online that if I turn off the backend server or if I switch browsers, the local storage wouldn't save the data.
- To fix this bug, I completely switched my code to using a SQL query that read all data in the database where the voltage was < 114 or > 126. This code can be found in server.js in the home directory and in the following directory: client/src/Content/NotificationsContent.js.
- After making this switch, the notifications never went away regardless of if I turned off the backend server or switched browsers.
- I was thinking about doing the notifications this way first, but making a SQL query that scans the entire database for so much data every second is extremely intensive and not the most efficient. However, it works for demo.
- At this point, the website is now fully done and ready for demo.

# ESP32 work: April 23, 2024

Objective: Get the ESP32 on the PCB to work.

- Met up with my group to debug the ESP32 and finish off the project.
- Soham told me that the ESP32 on the PCB wasn't able to be recognized by the Arduino IDE, meaning that it wasn't powered on. When I tried to fix it, I was running into the same problem.
- We then decided to unsolder the ESP32 and resolder it since the pads were very small so the soldering could be messing it up. After doing this, we still ran into the same issue.
- It was at this point when we realized that we should try switching to the ESP32 dev board so that we could still show functionality.
- When we soldered wires from the PCB to a breadboard that was connected to the ESP32, we ran into another set of issues. The ESP32 was on and recognized by the Arduino IDE; however, we weren't able to read any data off its GPIO pins. At this point, we checked to make sure that there was current running from the 2 measurement ICs, which there was.
- At this point, it was 4am and we decided that we just had to take a loss on this one part of the project since the final demo is in 10 hours.

# Final Demo: April 24, 2024

Objective: Demo the final product to Professor Schuh and Surya.

- We set up the demo so that Nicole would first go over problems that we aim to solve, our solution, and our high-level requirements.
- Then Nicole and Soham demoed the full functionality of the power supply, step down, and control unit PCBs. Unfortunately, we couldn't get the control unit subsystem to work; however, we were able to get the other 2 subsystems to completely work.
- I then closed off the presentation going over the database and the website. Since IllinoisNet Wi-Fi blocks connections to Google Cloud, I had to take a video of the website working for the demo.
- Professor Schuh had a few questions regarding the current signal that we were reading and why the graph wasn't perfectly sinusoidal. We explained that it was probably the battery powered part of the circuit that is introducing some harmonics or capacitance that is impacting the current graph.
- Overall, we presented pretty well and Surya said that we did well. An image of our finalized physical product is in the repo labeled "ECE 445 Final Project.png".

# Final Presentation: April 30, 2024

Objective: Present the problem that we were trying to solve, our solution, what worked, what didn't work, and potential future work of our project to Professor Schuh and Surya.

- We working on the presentation on April 29th. We added slides that were specific to the parts of the project that we each worked on. We made sure to add plenty of images, diagrams, schematics, and reduce the number of words wherever we could.
- We practiced the presentation at 11:30am on April 30th to make sure we knew how to transition to each of our parts and stay within the time limit.
- Nicole introduced us, discussed the problem we're solving, our solution, the block diagram, and our high-level requirements.
- Soham then talked about the step down and control unit, and Nicole talked about the power supply unit.
- I then talked about the database subsystem, which was the Google Cloud database and website. I explained how the data is transferred, how the website satisfied R&V tables, and showed a video of the website working. That video is linked in the repo titled "Short Demo.mp4". To explain how the data is transferred, I used a flow chart, which is in this repo titled "ECE 445 Software Flowchart.png".
- All 3 of us closed it off by explaining what we could've done better, lessons we learned, and future work on the project that could be done.

# Final Paper: May 1, 2024

Objective: Write a paper that covers everything that we did this semester and everything we discussed from the final presentation.

- We each explained what we worked on, how we debugged the project, what worked, and what didn't work.
- We then formatted the paper to the guidelines and specifications.
