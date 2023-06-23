const styles = {
  container: {
    display: 'flex',
    minHeight: 'calc(100vh - 60px)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 600,
    fontSize: 50,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Phonebook welcome page {' '}
        <span role="img" aria-label="Phone icon">
          📱
        </span>
      </h1>
    </div>
  );
}