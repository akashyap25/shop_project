const con = (req, res) => {
    return res.json({
        success: true,
        message: 'Welcome to My Project',
        error: {},
        data: {},
    });
}

module.exports = {
    con
} 