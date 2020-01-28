import React from 'react';
import { ProjectCard, ProjectDescription, ProjectContainer } from './styledProject';


class Project extends React.Component {
  render() {
    return(
      <ProjectContainer>
        <ProjectCard>This website - volkanapi.com
          <ProjectDescription>Everything on and behind this website</ProjectDescription>
        </ProjectCard>
        <ProjectCard>Anomalous Invoice Detector
          <ProjectDescription>The purpose of the project is to build a machine learning algorithm which detects and filters faulty invoice data. Such data must then be processed- and stored to a database server for further analysis. The user [Administrator] shall finally be allowed to analyze the data on the frontend.</ProjectDescription>
          <ProjectDescription>Software Method: Agile - two-weeks iteration</ProjectDescription>
          <ProjectDescription>Version Control: BitBucket </ProjectDescription>
          <ProjectDescription>Frontend: AngularJS</ProjectDescription>
          <ProjectDescription>Backend: Scala - Akka</ProjectDescription>
          <ProjectDescription>Machine Learning: Python</ProjectDescription>
          <ProjectDescription>Database: MariaDB</ProjectDescription>
        </ProjectCard>
        <ProjectCard>AI Soccer
          <ProjectDescription>The purpose of the project is to build a game engine for a 2D soccer game where the AI is modifiable by programmers/developers to test their programming abilities.</ProjectDescription>
          <ProjectDescription>Software Method: Agile - two-weeks iteration</ProjectDescription>
          <ProjectDescription>Version Control: GitHub</ProjectDescription>
          <ProjectDescription>Backend: NodeJS, SocketIO </ProjectDescription>
          <ProjectDescription>Frontend: Laravel, JavaScript</ProjectDescription>
          <ProjectDescription>Graphics: HTML5 Canvas</ProjectDescription>
          <ProjectDescription>Database: MySQL </ProjectDescription>
        </ProjectCard>
        <ProjectCard>Workspace
          <ProjectDescription>The purpose of the project is to allow an employee to submit/edit any client project they receive from a client into a cloud database. Thus administration rights must be given to certain employees to remove, review the project or generate statistics from the selected project.</ProjectDescription>
          <ProjectDescription>Software Method: Agile - one-week iteration</ProjectDescription>
          <ProjectDescription>Version Control: GitHub</ProjectDescription>
          <ProjectDescription>Frontend: HTML5/SASS</ProjectDescription>
          <ProjectDescription>Backend: Java Servlet - Routing between front- backend</ProjectDescription>
          <ProjectDescription>Deployment: Google AppEngine</ProjectDescription>
          <ProjectDescription>Database: Google Cloud SQL</ProjectDescription>
        </ProjectCard>
        <ProjectCard>User Activity Surveillance
          <ProjectDescription>
            Some parents are worried about their children's activities on the computer. They may command WiFi to block some explicit channels but that may not be enough as the children may find ways to exploit.
          </ProjectDescription>
          <ProjectDescription>
            The aim of the application is to give parents or other factors to surveil computer users of their activities i.e., sites they visit, keystrokes, taking screenshots of their current frame, and send them back to the owner within a period interval.
          </ProjectDescription>
          <ProjectDescription>
            Language: Win32 API C++
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>Currency Exchanger
          <ProjectDescription>
            An Android application that converts chosen currency to another. The default currency is set through finding clients location.
          </ProjectDescription>
          <ProjectDescription>Language: Android (Java)</ProjectDescription>
          <ProjectDescription>API Used: XE Inc</ProjectDescription>
          <ProjectDescription>Database: Firebase/MySQL</ProjectDescription>
        </ProjectCard>
        <ProjectCard>Task Scheduler
          <ProjectDescription>A simple yet powerful tool to schedule and automatically execute different tasks/programs upon call. Imagine a scenario where a company has an advertisement tool which the user has to send end of each month. The task scheduler application schedules it in the Windows Environment and runs it every e.g., 30 days. This is to facilitate multiple programs/tasks that to be run once or periodically.</ProjectDescription>
          <ProjectDescription>Language: Win32 API C++</ProjectDescription>
        </ProjectCard>
        <ProjectCard>Knight Dungeons
          <ProjectDescription>A 2D RPG game where the player can explore a finite-world with the danger of encountering a different set of enemies. The player is allowed to terminate and loot any enemy. The looted item can be equipped (if it is a gear/weapon/accessory) or sold to an NPC.</ProjectDescription>
          <ProjectDescription>The level system allows the player to gear even powerful items and empower its stats.</ProjectDescription>
          <ProjectDescription>The core objective is to level up and defeat the final boss which can be encountered if the player has reached a certain level.</ProjectDescription>
          <ProjectDescription>Language: C++/SFML</ProjectDescription>
        </ProjectCard>
        <ProjectCard>Learn the Road Signs
          <ProjectDescription>A singleplayer/multiplayer Android app which contains questions of multiple traffic signs where 4 different alternatives per question are generated. Only one of the alternatives is correct. The player must be online in order to play the game.</ProjectDescription>
          <ProjectDescription>The aim of the game is to teach players the meaning of road signs in a fun way.</ProjectDescription>
          <ProjectDescription>The player may play in a singleplayer session or invite a friend/other players to play in multiplayer.</ProjectDescription>
          <ProjectDescription>The game GUI is written in Java 1.8. The Firebase is used to authenticate the user, retrieve HTTP requests from the server and create sessions. Firebase' own database is used to store/retrieve questions for the current session. Only a question at a time is sent until answered.</ProjectDescription>
          <ProjectDescription>Android: Java for Android</ProjectDescription>
          <ProjectDescription>Backend: NodeJS (Firebase Cloud Functions and Cloud Storage)</ProjectDescription>
          <ProjectDescription>Database: Firebase Database</ProjectDescription>
          <ProjectDescription>User Authentication: Firebase Authentication</ProjectDescription>
          <ProjectDescription>Method: Agile</ProjectDescription>
        </ProjectCard>
        <ProjectCard>Booking Flight Ticket
          <ProjectDescription>
            My very first Java project where I individually used UML, Java and followed Agile development method. The program is to simulate a real-world ticket booking program. The request user is making is by comparing information with the database by either reject it if the seat is taken or the flight is full or respond with success. The request is finally written back to the database.
          </ProjectDescription>
          <ProjectDescription>Language: Java Frame (GUI)</ProjectDescription>
          <ProjectDescription>Database: Microsoft SQL</ProjectDescription>
          <ProjectDescription>Planning: UML</ProjectDescription>
          <ProjectDescription>Method: Agile</ProjectDescription>
        </ProjectCard>
        <ProjectCard>Newsfeed API
          <ProjectDescription>My very first backend project which streams newsfeed from a database storage to frontend storage. The author, date, and contents are packaged, converted to JSON and sent to the frontend via Akka HTTP using Scala language.</ProjectDescription>
          <ProjectDescription>Language: Scala</ProjectDescription>
          <ProjectDescription>Tool: Akka HTTP</ProjectDescription>
        </ProjectCard>
        <ProjectCard>Lightweight Data Encryptor
          <ProjectDescription>A data encryptor which encrypts user files upon request with AES-256 and further encrypts the key with RSA-2048 and sends back the private key to the user.</ProjectDescription>
          <ProjectDescription>Language: Win32 API C++</ProjectDescription>
          <ProjectDescription>Tool: CryptoPP</ProjectDescription>
        </ProjectCard>
        <ProjectCard>Geo Transformer
          <ProjectDescription>
            A Web API used to transform geographical coordinates (long/lat) to the corresponding country.
          </ProjectDescription>
          <ProjectDescription>Language: C# .NET Core</ProjectDescription>
          <ProjectDescription>Database: MongoDB</ProjectDescription>
        </ProjectCard>
        <ProjectCard>Dubstep Piano
          <ProjectDescription>A multiplayer Unity game where the user is playing piano following a certain pattern to gain points.</ProjectDescription>
          <ProjectDescription>Language: Unity (C#)</ProjectDescription>
          <ProjectDescription>Backend: NodeJS, SocketIO</ProjectDescription>
        </ProjectCard>
        <ProjectCard>Fitness Tracker
          <ProjectDescription>An Android App that uses Google Maps API to track nearest fitness locations around the user. When the fitness location is chosen, a route is drawn from user's location to target location.</ProjectDescription>
          <ProjectDescription>Language: Java for Android</ProjectDescription>
        </ProjectCard>
        <ProjectCard>...
          <ProjectDescription>Even more projects that are long lost from my library throughout the years</ProjectDescription>
        </ProjectCard>
      </ProjectContainer>
    );
  }
}


export default Project;