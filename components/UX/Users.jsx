import styles from "./Users.module.css";

export default function Users({ users = [] }) {
    const visibleUsers = users.slice(0, 4);

    const remainingCount = users.length > 4 ? users.length - 4 : 0;

    return (
        <div className={styles.avatars}>
            {visibleUsers.map((user, index) => (
                <div
                    key={user.id}
                    className={styles.avatar}
                    style={{ zIndex: 4 - index }}
                >
                    <img
                        src={user.avatar || "/images/avatars/default.webp"}
                        alt={`${user.name}'s avatar`}
                    />
                    {user.isOnline && <div className={styles.status}></div>}
                </div>
            ))}

            {remainingCount > 0 && (
                <div className={styles.count}>+{remainingCount}</div>
            )}
        </div>
    );
}
