    App.Controller.UserController = Backbone.View.extend({
        el: '#main',
        initialize: function(options) {
            this.editTemplate = _.template($('#user').html());
            var self = this;
            Backbone.on('user-create', function(params) {
                self.create(params);
            });
            Backbone.on('user-save', function(params) {
                self.save(params);
            });
            Backbone.on('user-cancel', function(params) {
                self.cancel(params);
            });
        },
        create: function() {
            this.userModel = new App.Model.UserModel();
            this._renderEdit();
        },
        save:function() { 
            var model = $('#userForm').serializeObject();
            document.getElementById("elNombre").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El usuario "+ model.firstName + " " + model.lastName + " nacio el "  + model.birthDate +"</div>".replace(/a/g, 'x');
        },
        cancel: function(){
            alert('Cancel');
        },
        _renderEdit: function() {
            var self = this;
            self.$el.html(self.editTemplate({user: self.userModel}));
        }
    });