$(document).ready(function() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBE5vLmLhILFBhJLoNz2i0lEi0CnmggnAw",
        authDomain: "test-5bc84.firebaseapp.com",
        databaseURL: "https://test-5bc84.firebaseio.com",
        projectId: "test-5bc84",
        storageBucket: "test-5bc84.appspot.com",
        messagingSenderId: "1076529131992",
        appId: "1:1076529131992:web:da11d8ec70125a54b6c2ad",
        measurementId: "G-FXRPNH8SV6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.database();
    $('#submit').on('click', function() {
        var name = $('#employee-name').val().trim();
        var role = $('#role').val().trim();
        var startDate = $('#start-date').val().trim();
        var monthlyRate = parseInt($('#monthly-rate').val().trim());
        db.ref().push({
            name: name,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate
        });
    });
});