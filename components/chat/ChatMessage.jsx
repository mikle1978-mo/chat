"use client";

import styles from "./ChatMessage.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import HighlightedText from "@/helpers/highLightedText.jsx";
import Loader from "../UX/Loader";

export default function ChatMessage({ message }) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };
    const {
        avatar,
        name,
        time,
        text,
        online,
        images,
        tags,
        actions,
        options,
        answers,
        isSystem,
        isDay,
    } = message;

    const messageRef = useRef(null);
    const [lineHeight, setLineHeight] = useState(0);

    useEffect(() => {
        if (answers.length > 0 && messageRef.current) {
            const messageHeight = messageRef.current.clientHeight;
            setLineHeight(messageHeight);
        }
    }, [answers]);

    if (isSystem) {
        return (
            <div className={styles.systemMessage}>
                <div className={styles.systemContainer}>
                    <img src={images[0]} alt='icon' />
                    <span>{text}</span>
                </div>
                <button className={styles.systemBtn}>Don't show again</button>
            </div>
        );
    }
    if (isDay) {
        return <span className={styles.day}>{text}</span>;
    }
    if (text === "loader") {
        return (
            <div className={styles.message}>
                <div className={styles.avatar}>
                    <Image src={avatar} alt='avatar' width={48} height={48} />
                    {online && <div className={styles.online}></div>}
                </div>
                <div className={styles.messageContent}>
                    <div className={styles.header}>
                        <div className={styles.nameContainer}>
                            <span className={styles.name}>{name}</span>
                            <span className={styles.time}>{time}</span>
                        </div>
                        <img src='/images/icons/copy.svg' alt='copy' />
                    </div>
                    <Loader />
                    {actions.length > 0 && (
                        <div className={styles.actions}>
                            {actions.map((action, index) => (
                                <div
                                    key={index}
                                    className={styles.actionContainer}
                                >
                                    <button
                                        className={styles.actionBtn}
                                        onClick={() => toggleDropdown(index)}
                                    >
                                        {action.actionName}
                                        {action.subActions?.length > 0 && (
                                            <img
                                                src='/images/icons/chevron-down.svg'
                                                alt='chevron-down'
                                                className={
                                                    openDropdown === index
                                                        ? styles.rotated
                                                        : ""
                                                }
                                            />
                                        )}
                                    </button>
                                    {openDropdown === index &&
                                        action.subActions?.length > 0 && (
                                            <div className={styles.dropdown}>
                                                {action.subActions.map(
                                                    (subAction) => (
                                                        <button
                                                            key={subAction.id}
                                                            className={
                                                                styles.subActionBtn
                                                            }
                                                        >
                                                            <div
                                                                className={
                                                                    styles.subActionBtn_left
                                                                }
                                                            >
                                                                <img
                                                                    src={
                                                                        subAction.subActionIcon
                                                                    }
                                                                    alt={
                                                                        subAction.subActionName
                                                                    }
                                                                />
                                                                {
                                                                    subAction.subActionName
                                                                }
                                                            </div>
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <Image src={avatar} alt='avatar' width={48} height={48} />
                {online && <div className={styles.online}></div>}
                {answers.length > 0 && (
                    <div
                        className={styles.answers_line}
                        style={{ height: lineHeight }}
                    ></div>
                )}
            </div>
            <div className={styles.messageContent}>
                <div className={styles.header}>
                    <div className={styles.nameContainer}>
                        <span className={styles.name}>{name}</span>
                        <span className={styles.time}>{time}</span>
                    </div>
                    <img src='/images/icons/copy.svg' alt='copy' />
                </div>
                <p className={styles.text} ref={messageRef}>
                    <HighlightedText text={text} />
                </p>
                {options.length > 0 && (
                    <div className={styles.options}>
                        {options.map((option, index) => (
                            <button key={index} className={styles.optionBtn}>
                                <img src={option.optionIcon} alt='optionIcon' />
                                <h2>{option.optionName}</h2>
                                <div className={styles.option_shadow}></div>
                            </button>
                        ))}
                    </div>
                )}
                {tags.length > 0 && (
                    <div className={styles.tags}>
                        {tags.map((tag, index) => (
                            <div key={index} className={styles.tag}>
                                {tag}
                                <img src='/images/icons/copy.svg' alt='copy' />
                            </div>
                        ))}
                    </div>
                )}
                {images.length > 0 && (
                    <div className={styles.images}>
                        {images.map((img, index) => (
                            <div key={index} className={styles.image_wrapper}>
                                <Image
                                    src={img}
                                    alt='attachment'
                                    width={300}
                                    height={300}
                                />
                                <div className={styles.imageBtn}>
                                    <svg
                                        width='6'
                                        height='12'
                                        viewBox='0 0 6 12'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M4.33341 2.25008C4.33341 2.98646 3.73646 3.58341 3.00008 3.58341C2.2637 3.58341 1.66675 2.98646 1.66675 2.25008C1.66675 1.5137 2.2637 0.916748 3.00008 0.916748C3.73646 0.916748 4.33341 1.5137 4.33341 2.25008ZM4.33341 9.75008C4.33341 10.4865 3.73646 11.0834 3.00008 11.0834C2.2637 11.0834 1.66675 10.4865 1.66675 9.75008C1.66675 9.0137 2.2637 8.41675 3.00008 8.41675C3.73646 8.41675 4.33341 9.0137 4.33341 9.75008Z'
                                            fill='#CDCECF'
                                            stroke='#CDCECF'
                                            strokeWidth='1.5'
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                )}{" "}
                {actions.length > 0 && (
                    <div className={styles.actions}>
                        {actions.map((action, index) => (
                            <div key={index} className={styles.actionContainer}>
                                <button
                                    className={styles.actionBtn}
                                    onClick={() => toggleDropdown(index)}
                                >
                                    {action.actionName}
                                    {action.subActions?.length > 0 && (
                                        <img
                                            src='/images/icons/chevron-down.svg'
                                            alt='chevron-down'
                                            className={
                                                openDropdown === index
                                                    ? styles.rotated
                                                    : ""
                                            }
                                        />
                                    )}
                                </button>
                                {openDropdown === index &&
                                    action.subActions?.length > 0 && (
                                        <div className={styles.dropdown}>
                                            {action.subActions.map(
                                                (subAction) => (
                                                    <button
                                                        key={subAction.id}
                                                        className={
                                                            styles.subActionBtn
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.subActionBtn_left
                                                            }
                                                        >
                                                            <img
                                                                src={
                                                                    subAction.subActionIcon
                                                                }
                                                                alt={
                                                                    subAction.subActionName
                                                                }
                                                            />
                                                            {
                                                                subAction.subActionName
                                                            }
                                                        </div>
                                                    </button>
                                                )
                                            )}
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>
                )}
                {answers.length > 0 && (
                    <div className={styles.answers}>
                        {answers.map((answer, index) => (
                            <div
                                key={index}
                                className={styles.answersContainer}
                            >
                                <div className={styles.avatar}>
                                    <Image
                                        src={answer?.avatar}
                                        alt='avatar'
                                        width={48}
                                        height={48}
                                    />
                                    {answer?.online && (
                                        <div className={styles.online}></div>
                                    )}
                                    <div
                                        className={
                                            styles.answer_horisontal_line
                                        }
                                    ></div>
                                </div>
                                <div className={styles.messageContent}>
                                    <div className={styles.header}>
                                        <div className={styles.nameContainer}>
                                            <span className={styles.name}>
                                                {answer?.name}
                                            </span>
                                            <span className={styles.time}>
                                                {answer.time}
                                            </span>
                                        </div>
                                        <img
                                            src='/images/icons/copy.svg'
                                            alt='copy'
                                        />
                                    </div>
                                    <p className={styles.text}>
                                        <HighlightedText text={answer.text} />
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
