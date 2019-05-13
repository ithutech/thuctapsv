CKEDITOR.plugins.add( 'clear', {
    init: function( editor ) {
        editor.addCommand( 'clearContent', {
            exec: function( editor ) {
                CKEDITOR.instances['InputTextArea'].setData('');
            }
        });
        editor.ui.addButton( 'btn_clearContent', {
            label: 'Dọn sạch để anh báo cáo',
            command: 'clearContent',
            toolbar: 'colors,100',
            icon: this.path + 'icons/clear_icon.png'


        });
    }
});