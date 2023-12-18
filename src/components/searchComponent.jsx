export default function getCities(input) {
    (async () => {
        const where = encodeURIComponent(JSON.stringify({
          "name": {
            "$regex": input
          }
        }));
        const response = await fetch(
          `https://parseapi.back4app.com/classes/City?limit=10&order=name&keys=name,country&where=${where}`,
          {
            headers: {
              'X-Parse-Application-Id': 'mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja', // This is the fake app's application id
              'X-Parse-Master-Key': 'TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH', // This is the fake app's readonly master key
            }
          }
        );
        const data = await response.json(); // Here you have the data that you need
        console.log(JSON.stringify(data, null, 2));
        return(data)
      })();
}