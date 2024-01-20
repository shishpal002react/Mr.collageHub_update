import React, { useState } from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import { BsPersonFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";



const Home = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const questionsAndAnswers = [
        {
            id: 1,
            question: 'Source',
            answers: [
                { label: 'Web', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
            ],
        },
        {
            id: 2,
            question: 'Stream',
            answers: [
                { label: 'Web', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
            ],
        },
        {
            id: 3,
            question: 'Stream',
            answers: [
                { label: 'Web', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
            ],
        },
        {
            id: 3,
            question: 'Stream',
            answers: [
                { label: 'Web', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
            ],
        },
        {
            id: 4,
            question: 'Stream',
            answers: [
                { label: 'Web', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
            ],
        },
        {
            id: 5,
            question: 'Stream',
            answers: [
                { label: 'Web', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
            ],
        },
        {
            id: 6,
            question: 'Stream',
            answers: [
                { label: 'Web', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
                { label: 'App', checked: false },
            ],
        },
    ];
    const handleQuestionClick = (id) => {
        setSelectedQuestion(id === selectedQuestion ? null : id);
    };
    const getArrowIcon = (id) => {
        return selectedQuestion === id ? <FaAngleDown /> : <FaChevronRight />;
    };
    const handleCheckboxChange = (id) => {

    };

    return (
        <>
            <Navbar />
            <div className='home1'>
                <div className='home2'>
                    <div className='home41'>
                        <p>CSL</p>
                    </div>
                    <div className='home42'>
                        <p>CLL</p>
                    </div>
                    <div className='home4'>
                        <p>ALL</p>
                    </div>
                    <div className='home4'>
                        <p>User Activity Leads</p>
                    </div>
                    <div className='home4'>
                        <p>Today’s Callback</p>
                    </div>
                    <div className='home4'>
                        <p>Walk in Leads</p>
                    </div>
                    <div className='home43'>
                        <p>Missed Callback</p>
                    </div>
                </div>

                <div className='home5'>
                    <div className='home6'>
                        <p>Priority (0)</p>
                    </div>
                    <div className='home6'>
                        <p>High Priority (0)</p>
                    </div>
                    <div className='home6'>
                        <p>Very High Priority (0)</p>
                    </div>
                </div>
            </div>

            <div className='home7'>
                <div className='home8'>
                    <div className='home9'>
                        <button>Clear Filters</button>
                    </div>
                    <div className='home10'>
                        <div className='home11'>
                            <BsPersonFill className='home12' />
                            <h6>Filter</h6>
                        </div>
                        <FaAngleDown className='home12' />
                    </div>

                    <div className='home13'>
                        <div className='helpdesk-container'>
                            <div className='helpdeskquestion'>
                                {questionsAndAnswers.map((qa) => (
                                    <div key={qa.id} className="faq-item">
                                        <div
                                            className={`question ${selectedQuestion === qa.id ? 'open' : ''}`}
                                            onClick={() => handleQuestionClick(qa.id)}
                                        >
                                            <span>{qa.question}</span>
                                            <div className="arrow-button">{getArrowIcon(qa.id)}</div>
                                        </div>
                                        {selectedQuestion === qa.id && (
                                            <div className="answer">
                                                <input type="serch" name="" id="" className='search1' />
                                                {qa.answers.map((answer, index) => (
                                                    <div key={index} className="checkbox-container">
                                                        <input
                                                            type="checkbox"
                                                            id={`checkbox-${qa.id}-${index}`}
                                                            checked={answer.checked}
                                                            onChange={() => handleCheckboxChange(qa.id, index)}
                                                        />
                                                        <label htmlFor={`checkbox-${qa.id}-${index}`}>{answer.label}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </>
    )
}

export default Home