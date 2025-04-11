"use client";
import MessageInput from "@/components/layout/MessageInput";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";

export default function ImageEditorPage({ params }) {
    const router = useRouter();
    const [image, setImage] = useState(null);
    const [editTools, setEditTools] = useState({
        brightness: 100,
        contrast: 100,
        hue: 0,
        saturation: 100,
        rotate: 0,
    });

    const { id } = use(params);

    useEffect(() => {
        const savedImage = sessionStorage.getItem("editingImage");
        if (savedImage) {
            try {
                const parsedImage = JSON.parse(savedImage);
                setImage(parsedImage);

                setTimeout(() => {
                    sessionStorage.removeItem("editingImage");
                }, 500);
            } catch (error) {
                console.error("Ошибка парсинга изображения:", error);
            }
        } else {
            router.back();
        }
    }, [id]);

    const handleSave = () => {
        const editedImage = {
            ...image,
            filters: editTools,
        };
        console.log("Сохранено:", editedImage);
        router.back();
    };

    if (!image) return <div>Loading...</div>;

    return (
        <div className={styles.pageContainer}>
            <div className={styles.main}>
                <div className={styles.heading}>
                    <div className={styles.heading_left}>
                        <div
                            onClick={() => router.back()}
                            className={styles.icon_wrapper}
                        >
                            <img
                                src='/images/icons/chevron-left.svg'
                                alt='icon'
                            />
                        </div>
                        {image.alt}
                        <img src='/images/Badge3D.webp' alt='3d' />
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.icon_wrapper}>
                            <img src='/images/icons/star.svg' alt='icon' />
                        </div>

                        <div onClick={handleSave} className={styles.export}>
                            Export
                            <div className={styles.icon_wrapper}>
                                <img
                                    src='/images/icons/download.svg'
                                    alt='icon'
                                />
                            </div>
                        </div>

                        <div className={styles.icon_wrapper}>
                            <img src='/images/icons/dots.svg' alt='icon' />
                        </div>
                    </div>
                </div>
                <div className={styles.editor}>
                    <div className={styles.preview}>
                        <img
                            src={image.src}
                            style={{
                                filter: `
                                    brightness(${editTools.brightness}%)
                                    contrast(${editTools.contrast}%)
                                    hue-rotate(${editTools.hue}deg)
                                    saturate(${editTools.saturation}%)
                                `,
                                transform: `rotate(${editTools.rotate}deg)`,
                            }}
                            alt={image.alt || "Editing image"}
                        />
                    </div>

                    <div className={styles.tool_panel}>
                        <div className={styles.tools_heading}>
                            <img
                                src='/images/icons/distortion.svg'
                                alt='distortion icon'
                            />
                            <img
                                src='/images/icons/rotate.svg'
                                alt='rotate icon'
                            />
                            <img src='/images/icons/crop.svg' alt='crop icon' />
                            <img src='/images/icons/sun.svg' alt='sun icon' />
                            <img
                                src='/images/icons/magic-wand.svg'
                                alt='magic-wand icon'
                            />
                        </div>
                        <div className={styles.divider}></div>
                        {/* <div className={styles.tool_group}>
                            <label>Яркость: {editTools.brightness}%</label>
                            <input
                                type='range'
                                min='0'
                                max='200'
                                value={editTools.brightness}
                                onChange={(e) =>
                                    setEditTools((prev) => ({
                                        ...prev,
                                        brightness: e.target.value,
                                    }))
                                }
                            />
                        </div> */}

                        {/* <div className={styles.tool_group}>
                            <label>Контраст: {editTools.contrast}%</label>
                            <input
                                type='range'
                                min='0'
                                max='200'
                                value={editTools.contrast}
                                onChange={(e) =>
                                    setEditTools((prev) => ({
                                        ...prev,
                                        contrast: e.target.value,
                                    }))
                                }
                            />
                        </div> */}
                        <details className={styles.details}>
                            <summary>Color</summary>
                            <ul className={styles.tools}>
                                <li className={styles.tool_group}>
                                    <label>
                                        <span>Hue:</span>
                                        <span>{editTools.hue}°</span>
                                    </label>
                                    <input
                                        className={styles.hue}
                                        type='range'
                                        min='0'
                                        max='360'
                                        value={editTools.hue}
                                        onChange={(e) =>
                                            setEditTools((prev) => ({
                                                ...prev,
                                                hue: e.target.value,
                                            }))
                                        }
                                    />
                                </li>

                                <li className={styles.tool_group}>
                                    <label>
                                        <span>Saturation:</span>{" "}
                                        <span>{editTools.saturation}%</span>
                                    </label>
                                    <input
                                        className={styles.saturation}
                                        type='range'
                                        min='0'
                                        max='200'
                                        value={editTools.saturation}
                                        onChange={(e) =>
                                            setEditTools((prev) => ({
                                                ...prev,
                                                saturation: e.target.value,
                                            }))
                                        }
                                    />
                                </li>
                            </ul>
                        </details>
                        <div className={styles.divider}></div>
                        <details className={styles.details}>
                            <summary>Effects</summary>
                            <ul className={styles.tools}>
                                <li className={styles.tool_group}>
                                    <label>
                                        <span>Flare bokeh:</span>

                                        <div className={styles.btn_group}>
                                            <span>0.25, 0.75, H255</span>
                                            <img
                                                src='/images/icons/sliders.svg'
                                                alt='sliders icon'
                                            />
                                            <img
                                                src='/images/icons/eye.svg'
                                                alt='eye icon'
                                            />
                                        </div>
                                    </label>
                                </li>

                                <li className={styles.tool_group}>
                                    <label>
                                        <span>Gaussian blur</span>{" "}
                                        <div className={styles.btn_group}>
                                            <span>0.33</span>{" "}
                                            <img
                                                src='/images/icons/sliders.svg'
                                                alt='sliders icon'
                                            />
                                            <img
                                                src='/images/icons/eye-cross.svg'
                                                alt='eye-cross icon'
                                            />
                                        </div>
                                    </label>
                                </li>
                                <li className={styles.tool_group}>
                                    <button>
                                        <img
                                            src='/images/icons/plus-in-circle.svg'
                                            alt='icon'
                                        />
                                        <span>Add effect</span>
                                    </button>
                                </li>
                            </ul>
                        </details>
                        <div className={styles.divider}></div>
                        <details className={styles.details}>
                            <summary>Hue/Saturation</summary>
                            <ul className={styles.tools}>
                                <li className={styles.tool_group}>
                                    <label>
                                        <span>Flare bokeh:</span>

                                        <div className={styles.btn_group}>
                                            <span>0.25, 0.75, H255</span>
                                            <img
                                                src='/images/icons/sliders.svg'
                                                alt='sliders icon'
                                            />
                                            <img
                                                src='/images/icons/eye.svg'
                                                alt='eye icon'
                                            />
                                        </div>
                                    </label>
                                </li>

                                <li className={styles.tool_group}>
                                    <label>
                                        <span>Gaussian blur</span>{" "}
                                        <div className={styles.btn_group}>
                                            <span>0.33</span>{" "}
                                            <img
                                                src='/images/icons/sliders.svg'
                                                alt='sliders icon'
                                            />
                                            <img
                                                src='/images/icons/eye-cross.svg'
                                                alt='eye-cross icon'
                                            />
                                        </div>
                                    </label>
                                </li>
                                <li className={styles.tool_group}>
                                    <button>
                                        <img
                                            src='/images/icons/plus-in-circle.svg'
                                            alt='icon'
                                        />
                                        <span>Add effect</span>
                                    </button>
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>
            </div>
            <MessageInput />
        </div>
    );
}
