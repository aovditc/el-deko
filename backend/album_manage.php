<?php
	
	$id = $_GET['id'];
	
	if( albumExists($id) )
	{
		$album = getAlbum($id);
		$images = getAlbumImages($id);
?>
<script type="text/javascript" src="js/album_manage.js"></script>
<script language="javascript">
function save_order(){
				var new_order = "";
				var incrementor = 0;
				
				$(".album_images li").each(function()
				{
					if( incrementor > 0 )
						new_order += ",";
						
					new_order += incrementor + "=" + $(this).attr("data-imageid");
					
					incrementor++;
          
          if (incrementor>69) {
            $.ajax(
      				{
      					url: "admin.php?images_new_order=" + $("#album_id").val() + "&order_string=" + new_order,
      					beforeSend: function()
      					{
      						showLoader("Saving current images order...");
      					},
      					success: function( resp )
      					{
      						hideLoader();
      					}
      				});
            new_order="";     
          }
				});
        //$.post("admin.php", { 'images_new_order': $("#album_id").val(), 'order_string': order_string });
				$.ajax(
				{
					url: "admin.php?images_new_order=" + $("#album_id").val() + "&order_string=" + new_order,
					beforeSend: function()
					{
						showLoader("Saving current images order...");
					},
					success: function( resp )
					{
						hideLoader();
					}
				}); 
       alert('Order has been saved!');    
			};
</script>
<a href="?action=album&id=<?php echo $id; ?>&edit" class="button" title="Click to edit">Album: <strong><?php echo $album['AlbumName']; ?></strong></a>
<div class="separator"></div>
<h1>Manage Album</h1>
<?php
	if( isset($_GET['edit']) )
	{
		include("edit_album.php");
	}
?>
<form action="" method="post" enctype="multipart/form-data" name="form1">
  <input type="hidden" name="album_id" id="album_id" value="<?php echo $album['AlbumID']; ?>">
  <input type="file" name="upload_image" id="upload_image" class="button">
</form>

<?php
			?>
            <ul class="album_images">
            <?php
			
			foreach($images as $image)
			{
				$image_path = $image['ImagePath'];
				$name = $image['Name'];
				
				$thumbnail = dirname($image_path) . '/th_' . basename($image_path);
				
				?>
                <li class="image" data-imageid="<?php echo $image['ImageID']; ?>">
					<img src="<?php echo $thumbnail; ?>" width="110" height="95" alt="<?php echo addslashes($name); ?>" title="<?php echo addslashes($name); ?>" />
                    <div class="clear"></div>
                    <a href="#" class="edit_img">Edit</a>
                    <a href="#" class="delete_img">Delete</a>
                </li>
                <?php
			}
			
			if( !count($images) )
			{
				?>
                <li class="noimages">
                	There are no images in this album
                </li>
                <?php
			}
			
			?>
            </ul>
            
            <div class="clear"></div
            
            Total images uploaded in this album: <span class="images_uploaded_num"><?php echo count($images); ?></span>
            <br />
            
            <a href="admin.php" class="go_back">&laquo; Go back</a>
            <div class="separator"></div>
            <?php
	}
	else
	{
?>
<br /><br />
<div class="error">Album doesn't exists! Please go back.</div>
<?php
	}
?>
<div class="loader">Loading...</div>