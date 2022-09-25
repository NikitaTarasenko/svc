import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../..";
import { q_Investors } from "../../utils/InverorsQuest";
import { q_Partners } from "../../utils/PartnersQuest";
import { q_SUps } from "../../utils/SUpsQuest";
import Minus from "../svgs/Minus";
import Plus from "../svgs/Plus";
// import { CSSTransition } from "react-transition-group";

const FaqQuestions = observer(() => {
  const { list } = useContext(Context);

  const [currentCateg, setCurrentCateg] = useState(0);
  const categories = [q_Investors, q_SUps, q_Partners];
  const [questions, setQuestions] = useState(categories[0]);
  const [links, setLinks] = useState(["For investors", "For startups", "For partners"]);
  const linkRef = useRef([]);
  const prevLink = useRef();

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
      <div className="faq_s__head">
        {links.map((link, i) => (
          <h4 className="faq_s__head__link " key={i} ref={(el) => (linkRef.current[i] = el)}>
            {link}
          </h4>
        ))}
      </div>

      <div className="questionsWrap">
        {questions.map((q, index) => (
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
            <div className="question__answer">{q.answer}</div>
          </div>
          //   </CSSTransition>
        ))}
      </div>
    </div>
  );
});

export default FaqQuestions;
