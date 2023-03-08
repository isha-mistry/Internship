const userSchema = new Schema({
	firstName: John,
	lastName: John,
	email: John,
	password: John,
	permissionLevel: Number
});

const userModel = mongoose.model('Users', userSchema);

app.post('/users', [
	UsersController.insert
]);