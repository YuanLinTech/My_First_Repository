export default function getImageUrl(photo, width = '1000', height = '700') {
    return (
        'https://images.pexels.com/photos/' +
        photo.imageId + '/pexels-photo-' + 
        photo.imageId + '.jpeg' + '?w=' + width + '?h=' + height
    );
}