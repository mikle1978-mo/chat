"use client";

import styles from "./ChatMessage.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import HighlightedText from "@/helpers/highLightedText.jsx";
import Loader from "../UX/Loader";
import Avatar from "../Avatar";
import EditImageButton from "../UI/EditImageButton";

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
                <Avatar avatar={avatar} online={online} />
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
            <Avatar avatar={avatar} online={online} />
            {/* {answers.length > 0 && (
                <div
                    className={styles.answers_line}
                    style={{ height: lineHeight }}
                ></div>
            )} */}
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
                            <div key={img.id} className={styles.image_wrapper}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={300}
                                    height={300}
                                />
                                <EditImageButton image={img} />
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
                                <Avatar
                                    avatar={answer?.avatar}
                                    online={online}
                                />
                                {/* <div
                                        className={
                                            styles.answer_horisontal_line
                                        }
                                    ></div> */}
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
