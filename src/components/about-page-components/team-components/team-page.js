import styles from "./css/team-page.css";
import TeamDisplay from "./team-display";
import { useState } from "react";
import TeamList, {allTeams, allTeams as tabs} from "./teams";
import { motion, AnimatePresence } from "framer-motion";

export default function TeamsPage() {
  const [selectedTab, setSelectedTab] = useState(allTeams[0]);

  return (
    <div className="header-body window">
      <nav>
        <ul>
          {allTeams.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
              //  below is displaying the icon next to the name
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div // the animation for the displayed icon
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="team-window"
            // below is displaying the icon for the selected tab {selectedTab ? selectedTab.icon : "😋"}
            // need to figure out how to display multiple of the cards i have now
            // maybe keep an array of the team information and map it?
          >
            <TeamDisplay teamName={selectedTab.label} />
            <TeamDisplay teamName={selectedTab.label} />
            <TeamDisplay teamName={selectedTab.label} />
          </motion.div> 
        </AnimatePresence> 
      </main>
    </div>
  );
}
