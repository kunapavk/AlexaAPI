const xlsx = require(`xlsx`);
const ResponseHandler = require(`../../utils/ResponseHandler`);

module.exports = function(server) {
  server.get(
    `/notifications`,
    function(req, res) {
      try {
        // const notifications =

        const notifications = {
          "institution": [
            "Campus will be shut down due to snowfall today"
          ],
          "courses": {
            "Course 1" : [
              "Quiz due on 4/15",
              "Homework due on 4/18"
            ]
          }
        };

        ResponseHandler(
          res,
          `Got notifications`,
          { notifications }
        );
      } catch (err) {
        console.log(`An error has occured`);
        console.log(err);
      }
    }
  );

  // server.get(
  //   `/classes`
  // )
};
