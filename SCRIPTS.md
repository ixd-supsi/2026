### Convertire JP2 (JPEG 2000) in PNG o TIF

1. Installare homebrew:\
https://brew.sh

2. Installare gdal:\
`> brew install gdal`

3. Ottenere informazioni sui valori minimi (valli) e massimi (picchi): \
```> gdalinfo -mm SLDEM2015_256_0N_60N_000_120.JP2```

4. Convertire, ridimensionare e mappare un JP2 -> PNG
```
gdal_translate \
	SLDEM2015_256_0N_60N_000_120.JP2 \
	moon_small.png \
	-of PNG \
	-ot Byte \ 
	-scale -8000 6000 0 255 \
	-outsize 2000 0
```