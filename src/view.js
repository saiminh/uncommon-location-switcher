window.addEventListener('DOMContentLoaded', function() {
  
  const locationswitcher = document.querySelectorAll('.uncommon-location-switcher');
  
  locationswitcher.forEach(function(switcher) {
    const location = switcher.querySelectorAll('.uncommon-location-switcher-location');
    
    location.forEach(function(loc, index) {
      
      index === 0 ? loc.classList.add('location-active') : null;
      
      const text = loc.querySelector('.uncommon-location-switcher-location-text');
      
      text.addEventListener('click', function() {
        document.querySelector('.location-active').classList.remove('location-active');
        loc.classList.add('location-active');
      })
    })
  })
})