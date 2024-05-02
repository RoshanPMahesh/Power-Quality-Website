stuff to note down:
1. ta meetings
2. block diagrams/figma image from paper/images of website and database
3. meeting with group
4. what i worked on and when - use commit history to help - include websites I used that helped me
5. work i did with group for deadlines (presentations, papers, pcb deadlines)
6. soldering assignment and CAD assignment??

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

# TA Meeting: March 20, 2024

Objective of session: Go over our progress and ask Surya any questions.

- Going to submit PCB next Tuesday. Already missed the first and second PCB wave.
- Individual evaluation next week.
- Website construction has started, frontend more than halfway done - need to set up GCP and ESP32.
- Ordered more parts, nearing $100 though.
- Might not need LCD screen, redundant with website.
- Need to meet with machine shop to tell them we just need a box, or we just make it ourselves.

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

# PCB work: April 1, 2024

Objective: Submit the power supply PCB

- Nicole had gotten the PCB to pass inspection, so we didn't need to congregate as a group to debug it.
- Submitted the board for the 4th round.
- Images of the power supply schematics are in the repo labeled "ECE 445 Power Supply Schematic.png".

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

# TA Meeting: April 17, 2024

Objective of session: Go over our progress and ask Surya any questions. Also did a mock demo to go over what to expect for the final demo.

- Presented introduction, high-level requirements, what works, and what doesn’t work yet.
- Explained the work we have left and our plans to complete the project.
- Asked questions about the enclosure and things to expect for the final demo.
  - We’ll need a strict enclosure that has a high voltage warning sticker, and we’ll need to bring printouts of our high-level requirement and other items.
- Not able to have the website working on Illinois WiFi due to security constraints on the WiFi. My hotspot isn’t strong enough to connect either.
  - Will need to figure this out by the final demo.
- Surya is overall happy with the progress, especially compared to the state of the project a week ago.

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
- I then talked about the database subsystem, which was the Google Cloud database and website. I explained how the data is transferred, how the website satisfied R&V tables, and showed a video of the website working. That video is linked in the repo titled "Short Demo.mp4".
- All 3 of us closed it off by explaining what we could've done better, lessons we learned, and future work on the project that could be done.

# Final Paper: May 1, 2024

Objective: Write a paper that covers everything that we did this semester and everything we discussed from the final presentation.

- We each explained what we worked on, how we debugged the project, what worked, and what didn't work.
- We then formatted the paper to the guidelines and specifications.
