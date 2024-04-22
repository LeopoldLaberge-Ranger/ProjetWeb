const FetchProvider = ({ children, blogId }) => {
    const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
      // Perform the fetch here and update the data state
      fetch(`http://localhost:3000/blogs/${blogId}`)
        .then(response => response.json())
        .then(fetchedData => setData(fetchedData))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <BlogDetailContext.Provider value={data}>
        {children}
      </BlogDetailContext.Provider>
    );
  };