/*jshint esversion: 8 */

const getResponse = (req, res)=>{
    res.status(200).json({slackUsername: 'Ojo Peter', backend: true, age: 25, bio: "I am a FullStack Mobile Developer and a Backend Web Developer. I'm proficient in HTML,CSS, Bootstrap, GIT, JavaScript, Node Js, Express, MongoDB, Flutter and Dart. I'm also a Tech Enthusiast."});
};

module.exports = {getResponse};