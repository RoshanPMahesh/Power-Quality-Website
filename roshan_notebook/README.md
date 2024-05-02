stuff to note down:
1. ta meetings
2. block diagrams/figma image from paper/images of website and database
3. meeting with group
4. what i worked on and when - use commit history to help
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
- Had a question about the LiFePo batteries, was referred to CHARMS paper since they used LiFePo batteries.
- Surya also wanted us to mirror the paper for its formatting.

# TA Meeting: February 28, 2024

Meeting cancelled due to Design Review with Surya and Professor Schuh.

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

# TA Meeting: March 27, 2024

Objective of session: Go over our progress and ask Surya any questions.

- Working on frontend, backend of website.
- Set up Google Cloud database, need to set up WebSocket.
- We aren’t using machine shop, we don’t think it’ll be complicated and won’t take up too much time.
- Ordered the first PCB, second PCB will be ordered next week.
- We will be working on the 2nd PCB, simulate first PCB and continue to look over it for errors.

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

Objective of session: Go over our progress and ask Surya any questions. Also went over what to expect for the final demo.

- Presented introduction, high-level requirements, what works, and what doesn’t work yet.
- Explained the work we have left and our plans to complete the project.
- Asked questions about the enclosure and things to expect for the final demo.
  - We’ll need a strict enclosure that has a high voltage warning sticker, and we’ll need to bring printouts of our high-level requirement and other items.
- Not able to have the website working on Illinois WiFi due to security constraints on the WiFi. My hotspot isn’t strong enough to connect either.
  - Will need to figure this out by the final demo.
- Surya is overall happy with the progress, especially compared to the state of the project a week ago.
