import app from './app';

const port = parseInt(process.env.APP_PORT as string) || 3001;

app.listen(port, () => console.log('Server is up and running'));
