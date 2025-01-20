import Markdown from "react-markdown";

interface JobItemProps {
  name: string;
  description: string;
  url: string;
  startDate: string;
  endDate: string;
  content: string;
}

const JobItem = ({
  name,
  description,
  url,
  startDate,
  endDate,
  content,
}: JobItemProps) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>{name}</h2>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Visit
        </a>
      </div>
      <p style={styles.description}>{description}</p>
      <p style={styles.date}>
        <strong>근무 기간:</strong> {startDate} - {endDate}
      </p>

      <Markdown>{content}</Markdown>
    </div>
  );
};

export default JobItem;

/**
 * @todo
 * add design
 */
// Inline styles for simplicity
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
    color: "#333",
  },
  link: {
    fontSize: "0.9rem",
    color: "#007bff",
    textDecoration: "none",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "8px",
  },
  date: {
    fontSize: "0.9rem",
    color: "#777",
    marginBottom: "16px",
  },
  content: {
    fontSize: "1rem",
    color: "#333",
  },
};
