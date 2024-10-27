const questionPool = [
    {
        question: "What is the recommended way to handle conditional rendering in a Reactive Web application?",
        options: {
            A: "Use JavaScript expressions to hide elements.",
            B: "Use the 'If' widget to display content based on conditions.",
            C: "Add logic in the Preparation event to hide elements.",
            D: "Create separate screens for each condition."
        },
        correctAnswer: "B"
    },
    {
        question: "In Reactive applications, what is the best practice for handling a large dataset in a list?",
        options: {
            A: "Load all records at once to improve performance.",
            B: "Use pagination or infinite scroll to manage data load.",
            C: "Use a static list to avoid server requests.",
            D: "Load data based on user session variables."
        },
        correctAnswer: "B"
    },
    {
        question: "What is the benefit of using Client Actions over Server Actions in Reactive applications?",
        options: {
            A: "Client Actions are executed on the server for faster processing.",
            B: "Client Actions improve performance by running directly on the user’s device.",
            C: "Client Actions are only used for database queries.",
            D: "Client Actions always run asynchronously."
        },
        correctAnswer: "B"
    },
    {
        question: "Which of the following is a best practice for managing state in a Reactive Web application?",
        options: {
            A: "Store all state data in the server database.",
            B: "Use local variables and client-side storage to manage session data.",
            C: "Store data globally to access it across screens.",
            D: "Avoid using session variables to prevent memory overload."
        },
        correctAnswer: "B"
    },
    {
        question: "What is the best approach to limit excessive API calls in Reactive applications?",
        options: {
            A: "Use a Timer to schedule API calls.",
            B: "Enable caching and implement data fetch only when needed.",
            C: "Set API calls to execute on every button click.",
            D: "Load all data at once to avoid further API calls."
        },
        correctAnswer: "B"
    },
    {
        question: "Which of the following is a best practice to prevent memory leaks in Reactive applications?",
        options: {
            A: "Use only Server Actions to manage data.",
            B: "Properly manage component unmounts and avoid excessive event listeners.",
            C: "Store all variables in global state.",
            D: "Keep all unused components on the screen for flexibility."
        },
        correctAnswer: "B"
    },
    {
        question: "What is a recommended way to handle errors in Reactive Web applications?",
        options: {
            A: "Use JavaScript to create custom error handlers.",
            B: "Handle errors with 'Exception Flows' and provide user feedback.",
            C: "Suppress all errors to avoid user interruptions.",
            D: "Only log errors in the browser console."
        },
        correctAnswer: "B"
    },
    {
        question: "Why is it beneficial to use asynchronous data fetching in Reactive applications?",
        options: {
            A: "It delays user interactions for better UX.",
            B: "It allows the UI to load independently from the data, improving responsiveness.",
            C: "It always requires fewer resources on the server.",
            D: "It prevents the need for data validation."
        },
        correctAnswer: "B"
    },
    {
        question: "What is the purpose of the Debounce feature in Reactive applications?",
        options: {
            A: "To delay processing of input events, reducing the number of server calls.",
            B: "To immediately execute all queued events.",
            C: "To speed up the processing of API calls.",
            D: "To group multiple client actions into one."
        },
        correctAnswer: "A"
    },
    {
        question: "What is the recommended approach to handle forms in Reactive Web applications?",
        options: {
            A: "Disable client-side validation for faster submission.",
            B: "Use form validation logic and client-side checks before submission.",
            C: "Allow users to submit forms without any validation.",
            D: "Only validate data on the server side."
        },
        correctAnswer: "B"
    },
    {
        question: "How should you manage dependencies between modules in a Reactive Web app?",
        options: {
            A: "Create circular dependencies for flexibility.",
            B: "Reference only necessary components to minimize dependency complexity.",
            C: "Import all elements from other modules to avoid issues.",
            D: "Store all logic in a single module."
        },
        correctAnswer: "B"
    },
    {
        question: "What is the best practice for storing sensitive information in a Reactive Web app?",
        options: {
            A: "Store it in local variables on the client side.",
            B: "Use the session storage for easy retrieval.",
            C: "Store it only on the server-side and avoid exposing it on the client.",
            D: "Hard-code sensitive information in the app."
        },
        correctAnswer: "C"
    },
    {
        question: "How can you avoid unnecessary re-rendering in Reactive Web applications?",
        options: {
            A: "Use JavaScript to control rendering.",
            B: "Use conditional rendering and state management.",
            C: "Always use synchronous calls.",
            D: "Only use global variables for all data."
        },
        correctAnswer: "B"
    },
    {
        question: "What is a recommended method to improve performance when handling large images in a Reactive Web app?",
        options: {
            A: "Load all images in high resolution immediately.",
            B: "Use image compression and lazy loading.",
            C: "Use high-definition images for better quality.",
            D: "Embed images as inline CSS."
        },
        correctAnswer: "B"
    },
    {
        question: "What is the benefit of encapsulating UI components into Web Blocks in Reactive apps?",
        options: {
            A: "It allows reusability and modularity, simplifying app maintenance.",
            B: "It makes it easier to control server-side events.",
            C: "It reduces the application’s loading speed.",
            D: "It prevents any UI updates from affecting the component."
        },
        correctAnswer: "A"
    },
    {
        question: "Which of the following is recommended when using Aggregates in Reactive Web applications?",
        options: {
            A: "Retrieve all data to avoid multiple calls.",
            B: "Filter data in Aggregates to retrieve only necessary information.",
            C: "Always sort data alphabetically.",
            D: "Store all Aggregate results in session variables."
        },
        correctAnswer: "B"
    },
    {
        question: "How can you optimize screen load times in Reactive applications?",
        options: {
            A: "Use only server-side rendering.",
            B: "Load minimal data and utilize pagination or lazy loading.",
            C: "Load all data at once to prevent future requests.",
            D: "Disable client-side caching."
        },
        correctAnswer: "B"
    },
    {
        question: "Why is it important to manage dependencies for CSS and JavaScript files in Reactive apps?",
        options: {
            A: "To ensure all files are loaded at the same time.",
            B: "To optimize performance and avoid redundant code.",
            C: "To increase the size of the application.",
            D: "To enable inline styling for all components."
        },
        correctAnswer: "B"
    },
    {
        question: "How should you structure error handling for complex Reactive Web applications?",
        options: {
            A: "Log errors directly in the browser console only.",
            B: "Implement centralized error handling and notify users when needed.",
            C: "Ignore errors that don’t affect core functionality.",
            D: "Handle errors solely at the end of user workflows."
        },
        correctAnswer: "B"
    },
    {
        question: "In Reactive applications, which approach is recommended for responsive design?",
        options: {
            A: "Use fixed sizes for components.",
            B: "Use flexible layouts, CSS grid, and media queries.",
            C: "Design separate screens for each device type.",
            D: "Avoid using any CSS frameworks."
        },
        correctAnswer: "B"
    },
	{
        question: "When encountering performance issues in a Reactive Web app, what is the first recommended step?",
        options: {
            A: "Check for client-side caching issues.",
            B: "Review all Aggregates and data sources for inefficiencies.",
            C: "Disable all custom JavaScript.",
            D: "Rebuild the application from scratch."
        },
        correctAnswer: "B"
    },
    {
        question: "What should you do if you see an 'Entity not found' error when loading a screen?",
        options: {
            A: "Restart the server to reload entities.",
            B: "Check if the entity was deleted or renamed.",
            C: "Clear the browser cache and reload.",
            D: "Add the missing entity manually."
        },
        correctAnswer: "B"
    },
    {
        question: "If a screen in your application fails to load data, what is a useful first step to troubleshoot?",
        options: {
            A: "Verify the screen's visibility settings.",
            B: "Check for errors in any related Aggregates or data sources.",
            C: "Disable all CSS styles.",
            D: "Update the application immediately."
        },
        correctAnswer: "B"
    },
    {
        question: "What could cause a 'Cyclic dependency' error in an OutSystems module?",
        options: {
            A: "Circular references between modules.",
            B: "Too many queries in a single Aggregate.",
            C: "Improper use of timers.",
            D: "Using too many input parameters."
        },
        correctAnswer: "A"
    },
    {
        question: "How should you handle an OutSystems application that shows slow loading times for a list?",
        options: {
            A: "Remove all items from the list.",
            B: "Apply pagination or lazy loading to reduce data load.",
            C: "Increase the browser cache size.",
            D: "Switch to a traditional web application model."
        },
        correctAnswer: "B"
    },
    {
        question: "What is the best approach to debug JavaScript errors in a Reactive Web app?",
        options: {
            A: "Use the OutSystems debugger exclusively.",
            B: "Use browser developer tools to inspect the console for errors.",
            C: "Ignore the errors if the app is functional.",
            D: "Remove all JavaScript from the application."
        },
        correctAnswer: "B"
    },
    {
        question: "When experiencing layout issues in different devices, what is a recommended troubleshooting step?",
        options: {
            A: "Remove all CSS styling from the application.",
            B: "Use the browser's developer tools to inspect elements and apply responsive settings.",
            C: "Convert the application to a Traditional Web app.",
            D: "Ignore layout issues for non-standard devices."
        },
        correctAnswer: "B"
    },
    {
        question: "What should you check if a button click event is not triggering any action?",
        options: {
            A: "Verify if the button is visible.",
            B: "Check if an OnClick event is associated with the button.",
            C: "Recompile the module to refresh all dependencies.",
            D: "Replace the button with a link."
        },
        correctAnswer: "B"
    },
    {
        question: "How should you approach a scenario where a Timer is not executing as expected?",
        options: {
            A: "Increase the Timer's interval.",
            B: "Check the environment's logs for errors related to the Timer.",
            C: "Disable the Timer and restart the application.",
            D: "Convert the Timer into a Client Action."
        },
        correctAnswer: "B"
    },
    {
        question: "If a REST API request fails, what is the first thing you should check?",
        options: {
            A: "Delete and re-create the REST API.",
            B: "Check the API endpoint URL and authentication settings.",
            C: "Restart the application server.",
            D: "Remove all headers from the request."
        },
        correctAnswer: "B"
    },
    {
        question: "What might cause a 'Data type mismatch' error in an Aggregate?",
        options: {
            A: "Using multiple entities in the same Aggregate.",
            B: "Attempting to assign a value of one data type to a variable of a different type.",
            C: "Trying to fetch data from multiple databases.",
            D: "Using a Client Action to run the Aggregate."
        },
        correctAnswer: "B"
    },
    {
        question: "How do you troubleshoot a Server Action that is unexpectedly slow?",
        options: {
            A: "Analyze the Server Action's logic for unnecessary loops or heavy operations.",
            B: "Add more Input Parameters to the Server Action.",
            C: "Convert it into a Client Action.",
            D: "Increase the server's memory allocation."
        },
        correctAnswer: "A"
    },
    {
        question: "What is the best practice to resolve an 'Invalid parameter value' error in an Action?",
        options: {
            A: "Change all parameters to text type.",
            B: "Ensure the values provided are of the correct type and within acceptable ranges.",
            C: "Remove all input validations.",
            D: "Increase the parameter size limit."
        },
        correctAnswer: "B"
    },
    {
        question: "What could be the cause if an Aggregate in a Reactive app returns unexpected results?",
        options: {
            A: "The Aggregate is not included in the screen's Preparation event.",
            B: "Filters or conditions in the Aggregate might be incorrect.",
            C: "The Aggregate was not used in any Client Actions.",
            D: "The screen has multiple Aggregates running at the same time."
        },
        correctAnswer: "B"
    },
    {
        question: "If a user reports that they see outdated data on a screen, what is a likely cause?",
        options: {
            A: "The screen is cached and not fetching the latest data.",
            B: "The server is in offline mode.",
            C: "The application was not published recently.",
            D: "The data entity is read-only."
        },
        correctAnswer: "A"
    },
    {
        question: "What can cause a screen to freeze during data loading in a Reactive Web app?",
        options: {
            A: "Multiple Client Actions running asynchronously.",
            B: "Excessive data being fetched without pagination or filtering.",
            C: "Using only local variables in the screen.",
            D: "Setting timeouts on the Aggregate."
        },
        correctAnswer: "B"
    },
    {
        question: "How can you troubleshoot incorrect calculations in a Reactive Web screen?",
        options: {
            A: "Add logging to Client Actions where calculations are performed.",
            B: "Use only Server Actions for all calculations.",
            C: "Clear the cache and reload the app.",
            D: "Restart the environment server."
        },
        correctAnswer: "A"
    },
    {
        question: "What is a likely cause of an error when importing data from an external source?",
        options: {
            A: "Mismatch between the source data types and OutSystems data types.",
            B: "The data import API was not set to public.",
            C: "There is no connection to the local database.",
            D: "OutSystems only accepts JSON data formats."
        },
        correctAnswer: "A"
    },
    {
        question: "What should you do if a REST API integration returns a CORS error?",
        options: {
            A: "Change the API request to use HTTP instead of HTTPS.",
            B: "Configure the API server to allow requests from the OutSystems environment’s domain.",
            C: "Add the endpoint URL to the client side.",
            D: "Disable CORS in the browser."
        },
        correctAnswer: "B"
    },
    {
        question: "If a Client Action does not execute when expected, what could be the cause?",
        options: {
            A: "The Client Action is not properly referenced in the UI.",
            B: "The Client Action is set to execute on the server side.",
            C: "The Client Action has too many input parameters.",
            D: "There is no OnClick event associated with the Action."
        },
        correctAnswer: "A"
    },
	{
        question: "What is the primary purpose of using the Integration Builder in OutSystems?",
        options: {
            A: "To build custom components from scratch.",
            B: "To quickly connect OutSystems with external services like REST APIs, SOAP, and databases.",
            C: "To automate database schema creation.",
            D: "To manage server resources within OutSystems."
        },
        correctAnswer: "B"
    },
    {
        question: "When integrating a REST API, what is the best practice for handling authentication?",
        options: {
            A: "Always hardcode authentication details in the request.",
            B: "Use Authentication headers or tokens and store them securely.",
            C: "Enable cookies to manage authentication.",
            D: "Authenticate the REST API within the screen preparation."
        },
        correctAnswer: "B"
    },
    {
        question: "How does OutSystems handle versioning for REST and SOAP APIs?",
        options: {
            A: "OutSystems automatically updates all API integrations.",
            B: "OutSystems does not support API versioning.",
            C: "OutSystems allows you to configure multiple versions and manage dependencies.",
            D: "It prompts users to delete old versions of APIs."
        },
        correctAnswer: "C"
    },
    {
        question: "When working with REST APIs in OutSystems, what is a recommended approach to handle response data transformation?",
        options: {
            A: "Use a Server Action to transform data before it's used in the UI.",
            B: "Directly display the raw API response on the UI.",
            C: "Use only Client Actions for data transformation.",
            D: "Convert the response data within the browser console."
        },
        correctAnswer: "A"
    },
    {
        question: "What should be done if a REST API request returns a CORS error?",
        options: {
            A: "Enable CORS support on the API server to allow requests from the OutSystems domain.",
            B: "Add CORS headers in OutSystems.",
            C: "Disable HTTPS for API requests.",
            D: "Turn off CORS in the browser settings."
        },
        correctAnswer: "A"
    },
    {
        question: "Which of the following is a supported method of connecting to external databases in OutSystems?",
        options: {
            A: "Only REST API integration.",
            B: "Database connectors like SQL Server, MySQL, Oracle, and direct access methods.",
            C: "Only SOAP integration.",
            D: "File-based data imports only."
        },
        correctAnswer: "B"
    },
    {
        question: "How does OutSystems handle errors when consuming a REST API?",
        options: {
            A: "It returns a blank response if an error occurs.",
            B: "It provides error handling through OnException flows, enabling custom error responses.",
            C: "It automatically retries the request.",
            D: "It prevents errors from showing in the UI."
        },
        correctAnswer: "B"
    },
    {
        question: "If an integration with an external API requires an OAuth token, what is the best practice in OutSystems?",
        options: {
            A: "Store the token in a local variable.",
            B: "Use a site property to securely store the OAuth token.",
            C: "Hardcode the token in the API endpoint.",
            D: "Generate a new token every time the API is called."
        },
        correctAnswer: "B"
    },
    {
        question: "What is the purpose of the 'OnAfterResponse' action when consuming REST APIs in OutSystems?",
        options: {
            A: "To handle API errors after the response is received.",
            B: "To manipulate the API response data before it reaches the UI.",
            C: "To log errors to the console.",
            D: "To delete API response data."
        },
        correctAnswer: "B"
    },
    {
        question: "What can cause a 'Timeout error' when integrating with an external service?",
        options: {
            A: "Too many requests in a short period or long response times from the external service.",
            B: "Using only server-side logic.",
            C: "Caching issues in OutSystems.",
            D: "Inadequate UI design."
        },
        correctAnswer: "A"
    },
    {
        question: "Which type of request is recommended to secure sensitive data when using REST APIs?",
        options: {
            A: "GET",
            B: "PUT",
            C: "POST",
            D: "DELETE"
        },
        correctAnswer: "C"
    },
    {
        question: "What is a common issue when consuming SOAP APIs in OutSystems?",
        options: {
            A: "SOAP APIs are automatically cached.",
            B: "SOAP APIs don't support security headers.",
            C: "SOAP APIs can require complex data mappings due to strict WSDL definitions.",
            D: "SOAP APIs only support JSON format."
        },
        correctAnswer: "C"
    },
    {
        question: "How does OutSystems manage integration with third-party authentication providers?",
        options: {
            A: "OutSystems only supports internal authentication mechanisms.",
            B: "OutSystems supports integration with third-party providers using OAuth, SAML, and custom methods.",
            C: "OutSystems handles authentication entirely within the application.",
            D: "OutSystems does not support any external authentication integration."
        },
        correctAnswer: "B"
    },
    {
        question: "What is a recommended approach for handling large data sets from an external API in a Reactive app?",
        options: {
            A: "Fetch all records at once.",
            B: "Use pagination to limit the data retrieved in each call.",
            C: "Only load data when the user scrolls to the end of the page.",
            D: "Save all records locally to reduce requests."
        },
        correctAnswer: "B"
    },
    {
        question: "What should you check if an external integration suddenly stops working after an API update?",
        options: {
            A: "Check the integration endpoint URL for any changes.",
            B: "Revert to the previous version of OutSystems.",
            C: "Restart the OutSystems environment.",
            D: "Increase the frequency of API calls."
        },
        correctAnswer: "A"
    },
    {
        question: "How does OutSystems handle pagination when integrating with external APIs?",
        options: {
            A: "It automatically paginates any API response.",
            B: "It requires manual implementation of pagination logic using API parameters.",
            C: "OutSystems doesn’t support pagination in API calls.",
            D: "It uses caching to simulate pagination."
        },
        correctAnswer: "B"
    },
    {
        question: "What approach is recommended for securing REST API integrations in OutSystems?",
        options: {
            A: "Only use GET requests for all interactions.",
            B: "Implement HTTPS and add authentication headers.",
            C: "Embed credentials directly in the URL.",
            D: "Disable all headers."
        },
        correctAnswer: "B"
    },
    {
        question: "Which error could occur if the data format in the response does not match the OutSystems data model?",
        options: {
            A: "Data type mismatch error.",
            B: "Screen freeze error.",
            C: "Memory allocation error.",
            D: "Screen visibility error."
        },
        correctAnswer: "A"
    },
    {
        question: "How can you handle different responses from an external API effectively?",
        options: {
            A: "Hardcode expected responses.",
            B: "Use conditional flows to manage different response formats or statuses.",
            C: "Ignore status codes from the API.",
            D: "Return a blank screen for unexpected responses."
        },
        correctAnswer: "B"
    },
    {
        question: "What is an effective way to test an API integration in OutSystems before deploying?",
        options: {
            A: "Publish the app and monitor user feedback.",
            B: "Use test endpoints and check all potential responses in a development environment.",
            C: "Only verify the request structure.",
            D: "Add the API directly to the production environment."
        },
        correctAnswer: "B"
    },
	{
        question: "When handling exceptions in OutSystems, what is the purpose of the 'OnException' event in an action flow?",
        options: {
            A: "To ignore exceptions and continue processing.",
            B: "To catch errors and implement custom error-handling logic.",
            C: "To automatically retry the action.",
            D: "To improve performance by bypassing error checks."
        },
        correctAnswer: "B"
    },
    {
        question: "What is the best practice for logging exceptions in OutSystems?",
        options: {
            A: "Use a separate Server Action specifically for logging exceptions.",
            B: "Log exceptions only in development environments.",
            C: "Suppress all error messages.",
            D: "Log only fatal exceptions and ignore minor ones."
        },
        correctAnswer: "A"
    },
    {
        question: "When does OutSystems rollback a transaction automatically?",
        options: {
            A: "When a screen action completes successfully.",
            B: "When an exception is thrown in a Server Action within a transaction.",
            C: "After every screen preparation step.",
            D: "When a user interaction ends."
        },
        correctAnswer: "B"
    },
    {
        question: "What should be considered when manually handling transactions in OutSystems?",
        options: {
            A: "Ensure each transaction has a unique identifier.",
            B: "Always use explicit BeginTransaction and CommitTransaction actions.",
            C: "Ensure there are no nested transactions within a flow.",
            D: "Restart the application after each transaction."
        },
        correctAnswer: "C"
    },
    {
        question: "Which action is best suited for handling database transaction errors?",
        options: {
            A: "Suppress all errors to avoid user disruptions.",
            B: "Wrap database actions in a Server Action with an exception handler.",
            C: "Use client-side error handling.",
            D: "Use a 'ClearTransaction' action to avoid errors."
        },
        correctAnswer: "B"
    },
    {
        question: "If an API request fails due to a network issue, what is the best practice for handling the exception?",
        options: {
            A: "Retry the request indefinitely.",
            B: "Catch the exception and log the error details.",
            C: "Suppress the error to avoid disrupting the UI.",
            D: "Ignore the error and continue processing."
        },
        correctAnswer: "B"
    },
    {
        question: "What is a common mistake to avoid when handling transactions in OutSystems?",
        options: {
            A: "Using nested exception handlers.",
            B: "Forgetting to include logging within transactions.",
            C: "Committing transactions outside of Server Actions.",
            D: "Using database transactions within Client Actions."
        },
        correctAnswer: "D"
    },
    {
        question: "How should you handle an exception that occurs in a Client Action?",
        options: {
            A: "Use the 'OnException' event in the Client Action to manage error handling.",
            B: "Handle all errors on the server side.",
            C: "Ignore the exception as Client Actions do not support error handling.",
            D: "Convert the Client Action into a Server Action to use 'OnException'."
        },
        correctAnswer: "A"
    },
    {
        question: "What is the role of the 'TransactionScope' in OutSystems?",
        options: {
            A: "To handle all exceptions in a module.",
            B: "To group multiple database operations into a single transaction.",
            C: "To speed up database operations.",
            D: "To manage UI exceptions."
        },
        correctAnswer: "B"
    },
    {
        question: "If you want to retry a failed operation within a transaction, what should you ensure?",
        options: {
            A: "Clear the transaction context after each retry.",
            B: "Log the exception details and rethrow the exception.",
            C: "Implement retry logic outside the transaction scope to prevent multiple commits.",
            D: "Disable automatic exception handling."
        },
        correctAnswer: "C"
    },
    {
        question: "Which of the following is true about exception handling in Server Actions?",
        options: {
            A: "Server Actions automatically log all exceptions.",
            B: "Exception handling logic must be explicitly defined within Server Actions.",
            C: "Server Actions cannot handle exceptions.",
            D: "Exception handling is only available in Client Actions."
        },
        correctAnswer: "B"
    },
    {
        question: "How does OutSystems handle database transactions in a flow with multiple Server Actions?",
        options: {
            A: "Each Server Action runs in its own transaction by default.",
            B: "All Server Actions in the flow are grouped into a single transaction by default.",
            C: "Transactions are disabled in Server Actions.",
            D: "Transactions are only applied to the final Server Action in the flow."
        },
        correctAnswer: "B"
    },
    {
        question: "What is a recommended way to handle validation errors before committing a transaction?",
        options: {
            A: "Use exception handling to catch validation errors.",
            B: "Validate all inputs before entering the transaction scope.",
            C: "Ignore validation and focus on transaction efficiency.",
            D: "Use Client Actions to manage validation errors."
        },
        correctAnswer: "B"
    },
    {
        question: "What happens if an exception occurs after a transaction has been committed?",
        options: {
            A: "The transaction is automatically rolled back.",
            B: "The exception is ignored.",
            C: "The transaction remains committed; the exception is handled separately.",
            D: "OutSystems forces a rollback and retries the operation."
        },
        correctAnswer: "C"
    },
    {
        question: "How can you prevent infinite loops when using exception handling within transactions?",
        options: {
            A: "Limit the number of retries and implement error logging.",
            B: "Retry indefinitely until the transaction succeeds.",
            C: "Only use exception handling in Client Actions.",
            D: "Handle all exceptions without logging."
        },
        correctAnswer: "A"
    },
    {
        question: "Which of the following can trigger an automatic rollback in OutSystems?",
        options: {
            A: "Successful API response.",
            B: "Any unhandled exception within a Server Action.",
            C: "Successful transaction completion.",
            D: "Non-database-related exceptions only."
        },
        correctAnswer: "B"
    },
    {
        question: "How should errors in asynchronous operations be handled in OutSystems?",
        options: {
            A: "Ignore errors in asynchronous operations as they do not affect the main transaction.",
            B: "Log errors and use exception handling within the asynchronous action.",
            C: "Only handle errors in synchronous actions.",
            D: "Use Client Actions for error handling."
        },
        correctAnswer: "B"
    },
    {
        question: "What is a benefit of explicitly handling exceptions in OutSystems?",
        options: {
            A: "It prevents all errors from occurring.",
            B: "It allows for custom error handling and improved user feedback.",
            C: "It speeds up transaction execution.",
            D: "It eliminates the need for logging."
        },
        correctAnswer: "B"
    },
    {
        question: "If a transaction includes multiple data operations, when is the best time to commit?",
        options: {
            A: "After each data operation.",
            B: "Only after all data operations have successfully completed.",
            C: "Before each data operation.",
            D: "At the start of the transaction."
        },
        correctAnswer: "B"
    },
    {
        question: "What is the best practice for handling exceptions in data-intensive transactions?",
        options: {
            A: "Suppress exceptions to maximize performance.",
            B: "Implement error handling at each stage and log specific errors.",
            C: "Commit each operation separately.",
            D: "Handle exceptions only in the last Server Action."
        },
        correctAnswer: "B"
    },
	{
        question: "What is the primary benefit of using asynchronous processes in OutSystems?",
        options: {
            A: "To reduce the load on the database.",
            B: "To perform long-running operations without blocking the user interface.",
            C: "To allow multiple users to access the same data simultaneously.",
            D: "To avoid using exception handling."
        },
        correctAnswer: "B"
    },
    {
        question: "Which component is most commonly used for scheduling asynchronous processes in OutSystems?",
        options: {
            A: "Client Actions",
            B: "Timers",
            C: "Entity Actions",
            D: "Server Actions"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the primary difference between Timers and Processes in OutSystems?",
        options: {
            A: "Timers are synchronous, while Processes are asynchronous.",
            B: "Timers are meant for scheduled tasks, whereas Processes handle complex workflows and state management.",
            C: "Processes are used only in mobile applications.",
            D: "Timers only handle data transformations."
        },
        correctAnswer: "B"
    },
    {
        question: "When using Timers, what is the best practice to avoid performance issues?",
        options: {
            A: "Set a high frequency for all timers to ensure tasks are executed often.",
            B: "Use short timers for all tasks.",
            C: "Schedule timers during off-peak hours to reduce load on the server.",
            D: "Combine all timers into a single, multi-purpose timer."
        },
        correctAnswer: "C"
    },
    {
        question: "In OutSystems, what mechanism should be used to handle errors in asynchronous processes?",
        options: {
            A: "Set error-handling logic in the client-side UI.",
            B: "Use exception handling in Server Actions called by the process.",
            C: "Schedule retries without error logging.",
            D: "Ignore errors since they don’t impact the main application."
        },
        correctAnswer: "B"
    },
    {
        question: "What happens if an asynchronous process fails in OutSystems?",
        options: {
            A: "The system ignores the error.",
            B: "The process stops immediately without retries.",
            C: "The process retries a predefined number of times before stopping.",
            D: "The process automatically retries until it succeeds."
        },
        correctAnswer: "C"
    },
    {
        question: "What should be done if an asynchronous process needs to run immediately after deployment?",
        options: {
            A: "Wait for the next scheduled run.",
            B: "Manually trigger the timer or process through Service Center.",
            C: "Schedule it with a higher priority.",
            D: "Enable it to run on all user devices."
        },
        correctAnswer: "B"
    },
    {
        question: "What is the best practice for scheduling long-running asynchronous processes?",
        options: {
            A: "Run them frequently to ensure data freshness.",
            B: "Schedule them at off-peak times to reduce server load.",
            C: "Divide the process into multiple smaller tasks and run them synchronously.",
            D: "Run them continuously without any delay."
        },
        correctAnswer: "B"
    },
    {
        question: "In OutSystems, which entity is primarily used to monitor the status of asynchronous processes?",
        options: {
            A: "Client logs",
            B: "Service Center",
            C: "User logs",
            D: "Developer console"
        },
        correctAnswer: "B"
    },
    {
        question: "Which is a recommended approach for data consistency in long-running asynchronous processes?",
        options: {
            A: "Disable all database transactions.",
            B: "Use transactions and implement retry logic in case of failure.",
            C: "Use client-side storage to handle data.",
            D: "Use a local variable for temporary storage."
        },
        correctAnswer: "B"
    },
    {
        question: "How can you ensure an asynchronous process does not interfere with user interactions?",
        options: {
            A: "Run it in a Client Action.",
            B: "Use asynchronous Server Actions or Timers to avoid UI blocking.",
            C: "Run it in the main thread.",
            D: "Run it on page load."
        },
        correctAnswer: "B"
    },
    {
        question: "What is a limitation of using Timers in OutSystems?",
        options: {
            A: "Timers cannot run on schedules.",
            B: "Timers can only be triggered during working hours.",
            C: "Timers don’t support asynchronous operations.",
            D: "Timers run only when there is activity in the application."
        },
        correctAnswer: "D"
    },
    {
        question: "Which OutSystems feature should be used to execute business logic when specific events occur in the data model?",
        options: {
            A: "Processes",
            B: "Timers",
            C: "Server Actions",
            D: "Event Listeners"
        },
        correctAnswer: "A"
    },
    {
        question: "Which of the following is true about automatic retries in asynchronous processes?",
        options: {
            A: "Retries are always infinite until successful completion.",
            B: "Retries can be configured in Service Center.",
            C: "Retries cannot be configured and are limited to a single attempt.",
            D: "Retries occur only if manually triggered by an administrator."
        },
        correctAnswer: "B"
    },
    {
        question: "When would you use a Process over a Timer in OutSystems?",
        options: {
            A: "When you need a scheduled task to run on a fixed time interval.",
            B: "When you need to manage state and handle complex workflows.",
            C: "When you want to perform synchronous data processing.",
            D: "When you need a process that triggers at page load."
        },
        correctAnswer: "B"
    },
    {
        question: "What should you monitor to troubleshoot issues in asynchronous processes?",
        options: {
            A: "Database schema changes",
            B: "System logs in Service Center",
            C: "Application variables",
            D: "User actions"
        },
        correctAnswer: "B"
    },
    {
        question: "How should you handle exceptions in a Timer to ensure data integrity?",
        options: {
            A: "Allow the timer to fail and log the exception.",
            B: "Ignore the exception and proceed with the next scheduled run.",
            C: "Catch exceptions in the logic and implement rollback or retry as needed.",
            D: "Disable error handling in the Timer configuration."
        },
        correctAnswer: "C"
    },
    {
        question: "What is the role of Service Center in managing asynchronous processes?",
        options: {
            A: "To deploy code only",
            B: "To manage users and permissions",
            C: "To monitor, configure, and troubleshoot asynchronous processes and timers",
            D: "To control UI logic and client-side actions"
        },
        correctAnswer: "C"
    },
    {
        question: "How can an OutSystems Timer be set to run at a specific time every day?",
        options: {
            A: "By setting the Timer as a Client Action",
            B: "Using a scheduled job in Service Center to configure the Timer",
            C: "Setting the Timer to run only when the application is active",
            D: "Running the Timer every time a page loads"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the most effective way to debug an asynchronous process that fails intermittently?",
        options: {
            A: "Use Service Center logs and monitor exception messages for patterns.",
            B: "Run the process repeatedly until the issue resolves.",
            C: "Convert the asynchronous process to a Client Action.",
            D: "Ignore the intermittent errors."
        },
        correctAnswer: "A"
    },
	 {
        question: "When merging changes in OutSystems, what happens if there is a conflict?",
        options: {
            A: "The most recent change automatically overwrites previous changes.",
            B: "OutSystems prompts the developer to manually resolve the conflict.",
            C: "All changes are discarded, and the previous version is restored.",
            D: "OutSystems automatically selects the most common changes."
        },
        correctAnswer: "B"
    },
    {
        question: "What is the purpose of tagging a version in OutSystems?",
        options: {
            A: "To prevent further changes to the application.",
            B: "To mark a specific version of an application for deployment or rollback.",
            C: "To start a new development branch.",
            D: "To automatically deploy the application."
        },
        correctAnswer: "B"
    },
    {
        question: "How does OutSystems manage changes when multiple developers work on the same module?",
        options: {
            A: "By allowing developers to overwrite each other’s changes.",
            B: "By prompting developers to check for updates and merge manually.",
            C: "By blocking changes until all developers agree.",
            D: "By requiring users to schedule changes in advance."
        },
        correctAnswer: "B"
    },
    {
        question: "Which of the following actions is NOT available in the Compare and Merge window?",
        options: {
            A: "Merge and publish changes immediately.",
            B: "Discard all changes made to the module.",
            C: "Preview the module without saving changes.",
            D: "Only publish the latest server version."
        },
        correctAnswer: "D"
    },
    {
        question: "What is a best practice when merging changes in a collaborative environment?",
        options: {
            A: "Always accept all changes from the server.",
            B: "Always keep a local copy without merging.",
            C: "Review each change carefully and merge selectively.",
            D: "Delete conflicting changes."
        },
        correctAnswer: "C"
    },
    {
        question: "Which feature in OutSystems helps to keep track of application versions across environments?",
        options: {
            A: "Local Environment Manager",
            B: "LifeTime",
            C: "Service Studio",
            D: "Development Console"
        },
        correctAnswer: "B"
    },
    {
        question: "What should you do if you encounter multiple conflicts while merging?",
        options: {
            A: "Select ‘Resolve Automatically’ to accept all changes.",
            B: "Abort the merge and try again later.",
            C: "Resolve conflicts individually in the Compare and Merge window.",
            D: "Restart the application and discard all changes."
        },
        correctAnswer: "C"
    },
    {
        question: "In OutSystems, when is version tagging typically done?",
        options: {
            A: "After completing and testing major features.",
            B: "After every minor change.",
            C: "Only when preparing for a hotfix.",
            D: "Only during app deployment."
        },
        correctAnswer: "A"
    },
    {
        question: "How can you use version tags in LifeTime?",
        options: {
            A: "To store modules locally for reference.",
            B: "To roll back to a previous application version if needed.",
            C: "To restrict access to certain parts of the application.",
            D: "To create new user roles."
        },
        correctAnswer: "B"
    },
    {
        question: "What is the purpose of the 'Merge and Publish' option?",
        options: {
            A: "It saves changes locally without deploying.",
            B: "It updates the local module and publishes it.",
            C: "It only publishes the changes to the test environment.",
            D: "It discards all local changes and keeps the server version."
        },
        correctAnswer: "B"
    },
    {
        question: "Which of the following can help prevent merge conflicts?",
        options: {
            A: "Avoid working on the same module as other team members.",
            B: "Perform frequent publishing even when not necessary.",
            C: "Ignore the changes made by others.",
            D: "Only merge changes during application deployment."
        },
        correctAnswer: "A"
    },
    {
        question: "What should you do if there is a need to roll back an application after an unsuccessful update?",
        options: {
            A: "Delete all modules and restart development.",
            B: "Use a version tag to revert to a previous stable version.",
            C: "Discard the deployment without tracking.",
            D: "Duplicate the modules and redeploy."
        },
        correctAnswer: "B"
    },
    {
        question: "In OutSystems, which environment component supports module and version management across teams?",
        options: {
            A: "Service Studio",
            B: "Integration Studio",
            C: "LifeTime",
            D: "Compare and Merge Window"
        },
        correctAnswer: "C"
    },
    {
        question: "What is the main benefit of resolving conflicts in the Compare and Merge window?",
        options: {
            A: "It removes outdated server versions.",
            B: "It allows selective merging of changes to avoid overwriting important updates.",
            C: "It keeps all local changes without review.",
            D: "It forces all developers to keep their changes."
        },
        correctAnswer: "B"
    },
    {
        question: "How often should team members publish their changes to avoid conflicts?",
        options: {
            A: "Every time a change is made, regardless of size.",
            B: "Whenever they have completed significant updates.",
            C: "Only at the end of the development cycle.",
            D: "Once per day, no more often."
        },
        correctAnswer: "B"
    },
    {
        question: "How are conflicts typically identified in OutSystems?",
        options: {
            A: "By publishing without any comparison.",
            B: "Through the Compare and Merge window during deployment.",
            C: "By checking the server log.",
            D: "By notifying the end-users."
        },
        correctAnswer: "B"
    },
    {
        question: "Which of the following actions is recommended to ensure consistent application updates?",
        options: {
            A: "Avoid using version tags to simplify the deployment process.",
            B: "Regularly merge changes and create version tags as checkpoints.",
            C: "Rely on automatic merging without verification.",
            D: "Only publish changes once all conflicts are resolved."
        },
        correctAnswer: "B"
    },
    {
        question: "In OutSystems, what is the recommended approach for managing code between development and production environments?",
        options: {
            A: "Directly deploy from development to production.",
            B: "Use LifeTime to manage version tags and promote code across environments.",
            C: "Always work in production.",
            D: "Only update production manually."
        },
        correctAnswer: "B"
    },
    {
        question: "Which feature in OutSystems allows you to compare module versions to identify differences?",
        options: {
            A: "LifeTime Monitor",
            B: "Compare and Merge",
            C: "Tagging",
            D: "Integration Studio"
        },
        correctAnswer: "B"
    },
    {
        question: "How does LifeTime help in managing multiple application versions?",
        options: {
            A: "By preventing developers from updating older versions.",
            B: "By allowing version tagging and tracking deployments.",
            C: "By scheduling automatic deployments only.",
            D: "By restricting versioning to local environments."
        },
        correctAnswer: "B"
    }
	
];
