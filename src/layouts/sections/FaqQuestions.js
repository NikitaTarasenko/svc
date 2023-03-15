import axios from "axios";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../..";
 
import Minus from "../svgs/Minus";
import Plus from "../svgs/Plus";
// import { CSSTransition } from "react-transition-group";

const FaqQuestions = observer(() => {
  const { list } = useContext(Context);
  const [q_Investors, setI] = useState([]);
  const [q_SUps, setS] = useState([]);
  const [q_Partners, setP] = useState([]);
  const [currentCateg, setCurrentCateg] = useState(0);
  const categories = [q_Investors, q_SUps, q_Partners];
  const [questions, setQuestions] = useState({});
  const [links, setLinks] = useState(["For investors", "For startups", "For partners"]);
  const [isLoaded, setIsLoaded] = useState(false);
  const linkRef = useRef([]);
  const prevLink = useRef();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      " Access-Control-Allow-Origin": "http://spr.sv.club"
    };

    try {
      const response = await axios.get("/rest.php?target=faq", { headers });
      
      Object.values(response.data).forEach((item) => {
        if(item.type === 'investor' ){
          console.log( 'investor' + item.id);
          q_Investors.push(item);
          console.log( q_Investors);
        }
        if(item.type === 'startup' ){
          console.log( 'startup' + item.id);
          q_SUps.push(item);
          console.log( q_SUps);
        }
        if(item.type === 'partners' ){
          console.log( 'investor' + item.id);
          q_Partners.push(item);
          console.log( q_Partners);
        }
       
      })
      setQuestions(categories[0])
      setIsLoaded(true)
    } catch (error) {
      console.error(error);
    }
  }

  const refreshGsap = () => {
    list.setQuestionsIsOpened(true);
    setTimeout(() => {
      list.setQuestionsIsOpened(false);
    }, 100);
  };
  useEffect(() => {
    linkRef.current[currentCateg].classList.add("faq_s__head__link_selected");
    linkRef.current.forEach((item, index) => {
      item.addEventListener("click", () => {
        setCurrentCateg(index);
        linkRef.current[prevLink.current].classList.remove("faq_s__head__link_selected");
        linkRef.current[index].classList.add("faq_s__head__link_selected");
      });
    });
  }, []);

  useEffect(() => {
    prevLink.current = currentCateg;
    setQuestions(categories[currentCateg]);
    console.log(questions);
    refreshGsap();
  }, [currentCateg]);

  const questionClickHandle = (id, iconOpened) => {
    let elements = questions.map((item) => {
      if (item.id === id) {
        return { ...item, iconOpened };
      } else {
        return item;
      }
    });
    setQuestions(elements);
    refreshGsap();
  };

  return (
    <div className="section faq_S">
      <div className="sectionWrap sectionWrap_noFlex">
        <div className="faq_s__head">
          {links.map((link, i) => (
            <h4 className="faq_s__head__link " key={i} ref={(el) => (linkRef.current[i] = el)}>
              {link}
            </h4>
          ))}
        </div>

        <div className="questionsWrap">
          {isLoaded ? questions.map((q, index) => (
            //   <CSSTransition in={switcher} classNames="dealFlowWhite" timeout={1300} >
            <div
              className={`question ${q.iconOpened ? "question_opened" : ""}`}
              onClick={() => questionClickHandle(q.id, !q.iconOpened)}
              key={q.id}
            >
              <div className="question__front">
                <span>{q.question}</span>
                {q.iconOpened ? <Minus /> : <Plus />}
              </div>
              <div className="question__answer"  dangerouslySetInnerHTML={{ __html: q.answer}}></div>
            </div>
            //   </CSSTransition>
          ))
        :
        ''
        }
        </div>
      </div>
    </div>
  );
});

export default FaqQuestions;
