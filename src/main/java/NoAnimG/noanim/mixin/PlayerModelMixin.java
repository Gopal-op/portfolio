package NoAnimG.noanim.mixin;

import net.minecraft.client.model.PlayerEntityModel;
import net.minecraft.entity.LivingEntity;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(PlayerEntityModel.class)
public class PlayerModelMixin {
    @Inject(method = "setAngles", at = @At("HEAD"), cancellable = true)
    private void noAnimation(LivingEntity entity, float f, float g, float h, float i, float j, CallbackInfo ci) {
        ci.cancel();
    }
}